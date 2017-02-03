const Model = require('../model.js');
const Parser = require('../parser.js');
const Controller = require('./controller.js');

const LanguageView = {
  SetCssState(language) {
    if (language === 'none') {
      return false;
    }
    const value = (language) ? `=${language}` : '=""';
    const a = document.querySelector(`.quick-custom-gsearch .language a[data${value}]`);
    a.className = 'active';
    return true;
  },
  CreateElement() {
    const languages = Model.SWITCH_LANGUAGES;
    const div = document.createElement('div');
    div.className = 'language';
    const spanHead = document.createElement('span');
    const spanTail = spanHead.cloneNode();
    spanHead.innerText = 'Language';
    spanHead.className = 'head';

    div.appendChild(spanHead);
    Object.keys(languages).forEach((i) => {
      const elm = document.createElement('a');
      elm.setAttribute('data', languages[i].data);
      elm.appendChild(document.createTextNode(languages[i].text));
      elm.addEventListener('click', LanguageView.QuickChange.bind(elm), false);
      div.appendChild(elm);
    });
    div.appendChild(spanTail);
    return div;
  },
  BindElement(div) {
    const target = document.querySelector('div.quick-custom-gsearch');
    target.insertBefore(div, target.firstChild);
  },
  QuickChange() {
    const language = this.getAttribute('data');
    const o = Parser.QueryHashToArray();
    o.lr = Controller.Validate(language);
    const parameter = Parser.BuildParameterByQueryObject(o);
    return Parser.RewriteURI(parameter);
  },
};

module.exports = LanguageView;
