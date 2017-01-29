const Model = require('../model.js');
const Parser = require('../parser.js');
const Cotroller = require('./controller.js');

const LanguageView = {
  SetCssState(language) {
    const a = document.querySelector(`.quick-custom-gsearch .language a[data=${language}]`);
    a.className = 'active';
  },
  CreateElement() {
    const languages = Model.SWITCH_LANGUAGES;
    const div = document.createElement('div');
    div.className = 'language';
    const span = document.createElement('span');

    div.appendChild(span);
    Object.keys(languages).forEach((i) => {
      const elm = document.createElement('a');
      elm.setAttribute('data', languages[i].data);
      elm.appendChild(document.createTextNode(languages[i].text));
      elm.addEventListener('click', LanguageView.QuickChange.bind(elm), false);
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
    const language = this.getAttribute('data');
    const o = Parser.QueryHashToArray();
    // o.lr = language
    // const parameter = Parser.BuildParameterByQueryObject(o);
    // return Controller.RewriteURI(parameter);
    return Cotroller.RewriteURI(language, o);
  },
};

module.exports = LanguageView;
