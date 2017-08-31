/* eslint-env mocha */
const expect = require('chai').expect;
const MainView = require('../../src/mainView.js');
const TermView = require('../../src/term/view.js');
const Model = require('../../src/model.js');

describe('Term/View >', () => {
  const range = 'm3';

  describe('CreateElement', () => {
    it('normal', () => {
      const dom = TermView.CreateElement();
      const nodes = dom.childNodes;

      expect(nodes[0].nodeName).to.equal('SPAN');
      expect(nodes[7].nodeName).to.equal('SPAN');

      Object.keys(Model.TERM).forEach((i) => {
        const key = Number(i) + 1;
        expect(nodes[key].nodeName).to.equal('A');
        expect(nodes[key].text).to.equal(Model.TERM[i].text);
        expect(nodes[key].getAttribute('data')).to.equal(Model.TERM[i].data);
      });
    });
  });

  describe('BindElement', () => {
    it('normal', () => {
      const main = MainView.CreateElement();
      MainView.BindElement(main);
      const dom = TermView.CreateElement();
      TermView.BindElement(dom);
      const target = document.querySelector('div#ucs .quick-custom-gsearch .term');
      expect(target.nodeName).to.equal('DIV');
    });
  });

  describe('SetCssState', () => {
    it('normal', () => {
      TermView.SetCssState(range);
      const target = document.querySelector(`.quick-custom-gsearch .term a[data=${range}]`);
      expect(target.className).to.equal('active');
    });
  });

  describe('QuickChange', () => {
    it('normal', () => {
      const elm = document.createElement('a');
      elm.setAttribute('data', Model.TERM[0].data);
      elm.appendChild(document.createTextNode(Model.TERM[0].text));
      const event = TermView.QuickChange.bind(elm);
      const result = event();
      expect(result).to.equal('/search?hl=ja&site=webhp&biw=810&bih=1306&q=duckduckgo&oq=duckduckgo&ie=UTF-8&tbm=');
    });
  });
});
