/* eslint-env mocha */
const expect = require('chai').expect;
const View = require('../src/mainView.js');

describe('mainView >', () => {
  describe('CreateElement', () => {
    it('normal', () => {
      const dom = View.CreateElement();
      expect(dom.nodeName).to.equal('DIV');
    });
  });

  describe('BindElement', () => {
    it('normal', () => {
      const dom = View.CreateElement();
      View.BindElement(dom);
      const target = document.querySelector('div#ucs > .quick-custom-gsearch');
      expect(target.nodeName).to.equal('DIV');
    });
  });
});
