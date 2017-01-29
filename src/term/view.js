const Model = require('../model.js');
const Parser = require('../parser.js');
const Cotroller = require('./controller.js');

const TermView = {
  SetCssState(range) {
    const a = document.querySelector(`.quick-custom-gsearch .term a[data=${range}]`);
    a.className = 'active';
  },
  CreateElement() {
    const term = Model.TERM;
    const div = document.createElement('div');
    div.className = 'term';
    const span = document.createElement('span');

    div.appendChild(span);
    Object.keys(term).forEach((i) => {
      const elm = document.createElement('a');
      elm.setAttribute('data', term[i].data);
      elm.appendChild(document.createTextNode(term[i].text));
      elm.addEventListener('click', TermView.QuickChange.bind(elm), false);
      div.appendChild(elm);
    });
    div.appendChild(span.cloneNode());
    return div;
  },
  BindElement(div) {
    const target = document.querySelector('div.quick-custom-gsearch');
    target.insertBefore(div, target.firstChild);
  },
  QuickChange() {
    const range = this.getAttribute('data');
    const q = Parser.QueryHashToArray().q;
    return Cotroller.RewriteURI(range, q);
  },
};

module.exports = TermView;
