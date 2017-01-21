const Model = require('./model.js');
const Parser = require('./parser.js');

const View = {
  SetCssState(range) {
    const a = document.querySelector(`.quick-custom-gsearch a[data=${range}]`);
    a.className = 'active';
  },
  BindElement() {
    const term = Model.TERM;
    const div = document.createElement('div');
    div.className = 'quick-custom-gsearch';
    const span = document.createElement('span');

    div.appendChild(span);
    for (const i of Array(6).keys()) {
      const elm = document.createElement('a');
      elm.setAttribute('data', term[i].data);
      elm.appendChild(document.createTextNode(term[i].text));
      elm.addEventListener('click', View.QuickChange, false);
      div.appendChild(elm);
    }
    div.appendChild(span.cloneNode());

    const ucs = document.querySelector('div#ucs');
    ucs.insertBefore(div, ucs.firstChild);
  },
  QuickChange() {
    const range = this.getAttribute('data');
    const q = Parser.QueryHashToArray().q;
    Parser.RewriteURI(range, q);
  },
};

module.exports = View;
