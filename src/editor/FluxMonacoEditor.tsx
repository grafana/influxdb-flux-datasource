// Libraries
import React, { FC, useEffect, useRef, useState } from 'react';
import { Server } from '@influxdata/flux-lsp-browser';

// Components
import MonacoEditor from 'react-monaco-editor';

// Utils
import addFluxTheme, { THEME_NAME } from './external/monaco.fluxTheme';
import { registerCompletion } from './external/monaco.fluxCompletions';
import { addSyntax } from './external/monaco.fluxSyntax';
import { addKeyBindings } from './external/monaco.keyBindings';
import { sendMessage, initialize, didChange, didOpen } from './external/monaco.lspMessages';

// Constants
import { FLUXLANGID } from './external/constants';

// Types
import { OnChangeScript } from './types/flux';
import { MonacoType, EditorType } from './types/monaco';

interface Props {
  script: string;
  onChangeScript: OnChangeScript;
  onSubmitScript?: () => void;
  setEditorInstance?: (editor: EditorType) => void;
}

const FluxEditorMonaco: FC<Props> = ({ script, onChangeScript, onSubmitScript, setEditorInstance }) => {
  let completionProvider = { dispose: () => {} };
  const lspServer = useRef(new Server(false));
  const [docVersion, setdocVersion] = useState(2);
  const [msgID, setmsgID] = useState(3);

  useEffect(() => {
    sendMessage(initialize, lspServer.current);
    sendMessage(didOpen(script), lspServer.current);
    return () => {
      completionProvider.dispose();
    };
  }, []);

  const editorWillMount = (monaco: MonacoType) => {
    monaco.languages.register({ id: FLUXLANGID });
    addFluxTheme(monaco);
    addSyntax(monaco);
    completionProvider = registerCompletion(monaco, lspServer.current);
  };

  const editorDidMount = (editor: EditorType, monaco: MonacoType) => {
    if (setEditorInstance) {
      setEditorInstance(editor);
    }
    addKeyBindings(editor, monaco);
    editor.focus();
    editor.onKeyUp(evt => {
      const { ctrlKey, code } = evt;
      if (ctrlKey && code === 'Enter') {
        if (onSubmitScript) {
          onSubmitScript();
        }
      }
    });
  };

  const onChange = (text: string) => {
    sendMessage(didChange(text, docVersion, msgID), lspServer.current);
    setdocVersion(docVersion + 1);
    setmsgID(msgID + 1);
    onChangeScript(text);
  };

  return (
    <div className="time-machine-editor" data-testid="flux-editor">
      <MonacoEditor
        language={FLUXLANGID}
        theme={THEME_NAME}
        value={script}
        onChange={onChange}
        options={{
          fontSize: 13,
          fontFamily: '"RobotoMono", monospace',
          cursorWidth: 2,
          lineNumbersMinChars: 4,
          lineDecorationsWidth: 0,
          minimap: {
            renderCharacters: false,
          },
          overviewRulerBorder: false,
          automaticLayout: true,
        }}
        editorWillMount={editorWillMount}
        editorDidMount={editorDidMount}
      />
    </div>
  );
};

export default FluxEditorMonaco;
