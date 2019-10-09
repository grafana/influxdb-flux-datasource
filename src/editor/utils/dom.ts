// Node.closest() polyfill
if ('Element' in window && !Element.prototype.closest) {
  Element.prototype.closest = function(this: any, s: string) {
    console.log("This is", this);
    const matches = (this.document || this.ownerDocument).querySelectorAll(s);
    let el = this;
    let i;
    // eslint-disable-next-line
    do {
      i = matches.length;
      // eslint-disable-next-line
      while (--i >= 0 && matches.item(i) !== el) {}
      el = el.parentElement;
    } while (i < 0 && el);
    return el;
  };
}

export function getPreviousCousin(node: any, selector: string) {
  console.log("Entering getPreviousCousin");
  let sibling = node.parentElement.previousSibling;
  let el;
  while (sibling) {
    el = sibling.querySelector(selector);
    if (el) {
      return el;
    }
    sibling = sibling.previousSibling;
  }
  console.log('returning undefined');
  return undefined;
}

export function getNextCharacter(global = window) {
  console.log("Entering getNextCharacter");
  const selection = global.getSelection();
  if (!selection || !selection.anchorNode) {
    return null;
  }

  const range = selection.getRangeAt(0);
  const text = selection.anchorNode.textContent;
  if (text === null) {
    return null;
  }
  const offset = range.startOffset;
  return text!.substr(offset, 1);
}
