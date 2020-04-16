(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@influxdata/clockface/dist/index.js
var dist = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(34);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/dataLoaders/components/TelegrafEditorPluginList.tsx


function groupPlugins(plugins, pluginFilter) {
    const map = plugins.reduce((prev, curr) => {
        if (curr.name === '__default__') {
            return prev;
        }
        if (!prev.hasOwnProperty(curr.type)) {
            prev[curr.type] = [];
        }
        prev[curr.type].push(curr);
        return prev;
    }, {});
    return ['bundle', 'input', 'output', 'processor', 'aggregator']
        .map((k) => {
        return {
            category: k,
            items: (map[k] || []).filter((a) => (a.name || '').includes(pluginFilter)),
        };
    })
        .filter((k) => k.items.length)
        .reduce((prev, curr) => {
        prev.push({
            type: 'display',
            name: curr.category,
        });
        const items = curr.items.slice(0).sort((a, b) => {
            return (a.name || '').localeCompare(b.name || '');
        });
        prev.push(...items);
        return prev;
    }, []);
}
class TelegrafEditorPluginList_PluginList extends react["PureComponent"] {
    render() {
        const { plugins, filter, onClick } = this.props;
        const list = groupPlugins(plugins, filter).map((k) => {
            if (k.type === 'display') {
                return (react_default.a.createElement("div", { className: "telegraf-plugins--item telegraf-plugins--divider", key: `_plugin_${k.type}.${k.name}` },
                    k.name,
                    "s"));
            }
            let description;
            if (k['description']) {
                description = (react_default.a.createElement("dd", { className: "telegraf-plugins--item-description" }, k['description']));
            }
            return (react_default.a.createElement("div", { className: "telegraf-plugins--item telegraf-plugins--plugin", key: `_plugin_${k.type}.${k.name}`, onClick: () => onClick(k) },
                react_default.a.createElement("dt", { className: "telegraf-plugins--item-name" }, k.name),
                description));
        });
        return (react_default.a.createElement(dist["DapperScrollbars"], { autoHide: false, className: "telegraf-plugins" },
            react_default.a.createElement("dl", { className: "telegraf-plugins--list" }, list)));
    }
}
/* harmony default export */ var TelegrafEditorPluginList = (TelegrafEditorPluginList_PluginList);

// EXTERNAL MODULE: ./src/resources/components/GetResources.tsx + 1 modules
var GetResources = __webpack_require__(51);

// EXTERNAL MODULE: ./src/dataLoaders/actions/telegrafEditor.ts
var telegrafEditor = __webpack_require__(253);

// EXTERNAL MODULE: ./src/types/index.ts
var types = __webpack_require__(5);

// CONCATENATED MODULE: ./src/dataLoaders/components/TelegrafEditorSidebar.tsx








const mstp_2 = (state) => {
    const plugins = state.telegrafEditorPlugins || [];
    const filter = state.telegrafEditor.filter;
    return {
        plugins,
        filter,
    };
};
const AllPluginList = Object(es["b" /* connect */])(mstp_2, null)(TelegrafEditorPluginList);
class TelegrafEditorSidebar_TelegrafEditorSideBar extends react["PureComponent"] {
    renderPlugins() {
        const { show, onAdd } = this.props;
        if (!show) {
            return false;
        }
        return (react_default.a.createElement(GetResources["a" /* default */], { resources: [types["ResourceType"].Plugins] },
            react_default.a.createElement(AllPluginList, { onClick: onAdd })));
    }
    render() {
        const { filter, show, onSetList, onSetFilter } = this.props;
        const columnClassName = classnames_default()('telegraf-editor--left-column', {
            'telegraf-editor--column__collapsed': !show,
        });
        const icon = show ? dist["IconFont"].EyeOpen : dist["IconFont"].EyeClosed;
        const header = 'Browse & Add Plugins';
        return (react_default.a.createElement("div", { className: columnClassName },
            react_default.a.createElement("div", { className: "telegraf-editor--column-heading" },
                react_default.a.createElement("span", { className: "telegraf-editor--title" }, header),
                react_default.a.createElement(dist["SquareButton"], { icon: icon, size: dist["ComponentSize"].ExtraSmall, onClick: () => onSetList(!show) })),
            show && (react_default.a.createElement(dist["Input"], { className: "telegraf-editor--filter", size: dist["ComponentSize"].Small, icon: dist["IconFont"].Search, value: filter, onBlur: (evt) => {
                    onSetFilter(evt.target.value);
                }, style: {}, onChange: (evt) => {
                    onSetFilter(evt.target.value);
                }, placeholder: "Filter Plugins..." })),
            this.renderPlugins(),
            !show && (react_default.a.createElement("div", { className: "telegraf-editor--title__collapsed" }, header))));
    }
}
const mstp_3 = (state) => {
    const filter = state.telegrafEditor.filter;
    const show = state.telegrafEditor.showList;
    return {
        filter,
        show,
    };
};
const mdtp_3 = {
    onSetList: telegrafEditor["e" /* setList */],
    onSetFilter: telegrafEditor["d" /* setFilter */],
};
/* harmony default export */ var TelegrafEditorSidebar = (Object(es["b" /* connect */])(mstp_3, mdtp_3)(TelegrafEditorSidebar_TelegrafEditorSideBar));

// CONCATENATED MODULE: ./src/dataLoaders/components/TelegrafEditorPluginLookup.tsx






const TelegrafEditorPluginLookup_TelegrafEditorSideBar = ({ plugins, onJump, show, onChangeLookup, }) => {
    const columnClassName = classnames_default()('telegraf-editor--right-column', {
        'telegraf-editor--column__collapsed': !show,
    });
    const icon = show ? dist["IconFont"].EyeOpen : dist["IconFont"].EyeClosed;
    const header = 'Plugins';
    return (react_default.a.createElement("div", { className: columnClassName },
        react_default.a.createElement("div", { className: "telegraf-editor--column-heading" },
            react_default.a.createElement("span", { className: "telegraf-editor--title" }, header),
            react_default.a.createElement(dist["SquareButton"], { icon: icon, size: dist["ComponentSize"].ExtraSmall, onClick: () => onChangeLookup(!show) })),
        show && react_default.a.createElement(TelegrafEditorPluginList, { plugins: plugins, filter: "", onClick: onJump }),
        !show && (react_default.a.createElement("span", { className: "telegraf-editor--title__collapsed" },
            header,
            " "))));
};
const mstp = (state) => {
    const plugins = state.telegrafEditorActivePlugins || [];
    const show = state.telegrafEditor.showLookup;
    return { plugins, show };
};
const mdtp = {
    onChangeLookup: telegrafEditor["f" /* setLookup */],
};
/* harmony default export */ var TelegrafEditorPluginLookup = (Object(es["b" /* connect */])(mstp, mdtp)(TelegrafEditorPluginLookup_TelegrafEditorSideBar));

// EXTERNAL MODULE: ./src/shared/components/TomlMonacoEditor.tsx + 2 modules
var TomlMonacoEditor = __webpack_require__(846);

// CONCATENATED MODULE: ./src/dataLoaders/components/TelegrafEditorMonaco.tsx




const PLUGIN_REGEX = /\[\[\s*(inputs|outputs|processors|aggregators)\.(.+)\s*\]\]/;
class TelegrafEditorMonaco_TelegrafEditorMonaco extends react["PureComponent"] {
    constructor() {
        super(...arguments);
        this._editor = null;
        this.connect = (editor) => {
            this._editor = editor;
            this.extractPluginList();
        };
        this.handleChange = (evt) => {
            this.extractPluginList();
            this.props.onSetText(evt);
        };
    }
    render() {
        const { script } = this.props;
        return (react_default.a.createElement("div", { className: "telegraf-editor--middle-column" },
            react_default.a.createElement("div", { className: "telegraf-editor--column-heading" },
                react_default.a.createElement("span", { className: "telegraf-editor--title" }, "Configuration File")),
            react_default.a.createElement(TomlMonacoEditor["a" /* default */], { className: "telegraf-editor--monaco", script: script, onChangeScript: this.handleChange, willMount: this.connect })));
    }
    extractPluginList() {
        if (!this._editor) {
            return;
        }
        const matches = this._editor
            .getModel()
            .findMatches(PLUGIN_REGEX, false, true, false, null, true);
        const plugins = matches.map((m) => {
            return {
                type: m.matches[1].slice(0, -1),
                name: m.matches[2],
                line: m.range.startLineNumber,
            };
        });
        this.props.onSetActivePlugins(plugins);
    }
    jump(line) {
        this._editor.revealLineInCenter(line);
    }
    nextLine() {
        const position = this._editor.getPosition();
        const matches = this._editor
            .getModel()
            .findNextMatch(PLUGIN_REGEX, position, true, false, null, true);
        let lineNumber;
        if (position.lineNumber === 1 ||
            !matches ||
            position.lineNumber > matches.range.startLineNumber) {
            lineNumber = this._editor.getModel().getLineCount();
        }
        else {
            lineNumber = matches.range.startLineNumber - 1;
        }
        return lineNumber;
    }
    insert(text, line) {
        this._editor.setPosition({ column: 1, lineNumber: line });
        this._editor.executeEdits('', [
            {
                range: {
                    startLineNumber: line,
                    startColumn: 1,
                    endLineNumber: line,
                    endColumn: 1,
                },
                text: text,
                forceMoveMarkers: true,
            },
        ]);
    }
}

const TelegrafEditorMonaco_mstp = (state) => {
    const map = state.telegrafEditorPlugins.reduce((prev, curr) => {
        prev[curr.name] = curr;
        return prev;
    }, {});
    const script = state.telegrafEditor.text ||
        map['__default__'].include
            .map((i) => {
            if (!map.hasOwnProperty(i)) {
                return '';
            }
            return map[i].config;
        })
            .join('\n');
    return {
        script,
    };
};
const TelegrafEditorMonaco_mdtp = {
    onSetActivePlugins: telegrafEditor["c" /* setActivePlugins */],
    onSetText: telegrafEditor["g" /* setText */],
};
/* harmony default export */ var components_TelegrafEditorMonaco = (Object(es["b" /* connect */])(TelegrafEditorMonaco_mstp, TelegrafEditorMonaco_mdtp, null, {
    withRef: true,
})(TelegrafEditorMonaco_TelegrafEditorMonaco));

// EXTERNAL MODULE: ./src/dataLoaders/components/TelegrafEditor.scss
var components_TelegrafEditor = __webpack_require__(1527);

// EXTERNAL MODULE: ./src/shared/decorators/errors.tsx
var errors = __webpack_require__(11);

// CONCATENATED MODULE: ./src/dataLoaders/components/TelegrafEditor.tsx









let TelegrafEditor_TelegrafEditor = class TelegrafEditor extends react["PureComponent"] {
    constructor() {
        super(...arguments);
        this._editor = null;
        this.connect = (elem) => {
            this._editor = elem;
        };
        this.handleJump = (which) => {
            this._editor.getWrappedInstance().jump(which.line);
        };
        this.handleAdd = (which) => {
            const editor = this._editor.getWrappedInstance();
            const line = editor.nextLine();
            if (which.type === 'bundle') {
                which.include
                    .filter(item => this.props.pluginHashMap[item] &&
                    this.props.pluginHashMap[item].type !== 'bundle')
                    .map(item => (this.props.pluginHashMap[item] ||
                    {}).config)
                    .filter(i => !!i)
                    .reverse()
                    .forEach(item => {
                    editor.insert(item, line);
                });
            }
            else {
                editor.insert(which.config || '', line);
            }
            editor.jump(line);
        };
    }
    render() {
        return (react_default.a.createElement("div", { className: "telegraf-editor" },
            react_default.a.createElement("div", { className: "telegraf-editor--heading" },
                react_default.a.createElement(dist["Alert"], { color: dist["ComponentColor"].Default }, "This tool will help create a configuration file for Telegraf, but you will have to download and run Telegraf externally to get data into your bucket.")),
            react_default.a.createElement("div", { className: "telegraf-editor--body" },
                react_default.a.createElement(TelegrafEditorSidebar, { onJump: this.handleJump, onAdd: this.handleAdd }),
                react_default.a.createElement(components_TelegrafEditorMonaco, { ref: this.connect }),
                react_default.a.createElement(TelegrafEditorPluginLookup, { onJump: this.handleJump }))));
    }
};
TelegrafEditor_TelegrafEditor = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */]
], TelegrafEditor_TelegrafEditor);
const TelegrafEditor_mstp = (state) => {
    const pluginHashMap = state.telegrafEditorPlugins
        .filter((a) => a.type !== 'bundle' || !!a.include.length)
        .reduce((prev, curr) => {
        prev[curr.name] = curr;
        return prev;
    }, {});
    return {
        pluginHashMap,
    };
};
/* harmony default export */ var dataLoaders_components_TelegrafEditor = __webpack_exports__["default"] = (Object(es["b" /* connect */])(TelegrafEditor_mstp, null)(TelegrafEditor_TelegrafEditor));


/***/ })

}]);
//# sourceMappingURL=3.index.js.map