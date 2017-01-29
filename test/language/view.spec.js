/* eslint-env mocha */
const expect = require('chai').expect;
const MainView = require('../../src/mainView.js');
const LanguageView = require('../../src/language/view.js');
const Model = require('../../src/model.js');

describe('LanguageView >', () => {
  const language = 'lang_en';

  it('CreateElement', () => {
    const dom = LanguageView.CreateElement();
    const nodes = dom.childNodes;

    expect(nodes[0].nodeName).to.equal('SPAN');
    expect(nodes[4].nodeName).to.equal('SPAN');

    Object.keys(Model.SWITCH_LANGUAGES).forEach((i) => {
      const key = Number(i) + 1;
      expect(nodes[key].nodeName).to.equal('A');
      expect(nodes[key].textContent).to.equal(Model.SWITCH_LANGUAGES[i].text);
      expect(nodes[key].getAttribute('data')).to.equal(Model.SWITCH_LANGUAGES[i].data);
    });
  });

  it('BindElement', () => {
    const main = MainView.CreateElement();
    MainView.BindElement(main);
    const dom = LanguageView.CreateElement();
    LanguageView.BindElement(dom);
    const target = document.querySelector('div#ucs .quick-custom-gsearch .language');
    expect(target.nodeName).to.equal('DIV');
  });

  it('SetCssState', () => {
    LanguageView.SetCssState(language);
    const target = document.querySelector(`.quick-custom-gsearch .language a[data=${language}]`);
    expect(target.className).to.equal('active');
  });

  it('QuickChange', () => {
    const elm = document.createElement('a');
    elm.setAttribute('data', Model.TERM[0].data);
    elm.appendChild(document.createTextNode(Model.TERM[0].text));
    const event = LanguageView.QuickChange.bind(elm);
    const result = event();
    expect(result).to.equal('/search?hl=ja&site=webhp&biw=810&bih=1306&q=duckduckgo&oq=duckduckgo&ie=UTF-8&tbm=');
  });
});
