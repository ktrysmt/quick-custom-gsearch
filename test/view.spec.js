/* eslint-env mocha */
const expect = require('chai').expect;
const View = require('../src/view.js');
const Model = require('../src/model.js');

describe('View >', () => {
  const range = 'm3';

  it('CreateElement', () => {
    const dom = View.CreateElement();
    const nodes = dom.childNodes;

    expect(nodes[0].nodeName).to.equal('SPAN');
    expect(nodes[7].nodeName).to.equal('SPAN');

    for (let i = 0; i < Model.TERM.length; ++i) {
      const key = i + 1;
      expect(nodes[key].nodeName).to.equal('A');
      expect(nodes[key].textContent).to.equal(Model.TERM[i].text);
      expect(nodes[key].getAttribute('data')).to.equal(Model.TERM[i].data);
    }
  });

  it('BindElement', () => {
    const dom = View.CreateElement();
    View.BindElement(dom);
  });

  it('SetCssState', () => {
    View.SetCssState(range);
  });

  it('QuickChange', () => {
    const elm = document.createElement('a');
    elm.setAttribute('data', Model.TERM[0].data);
    elm.appendChild(document.createTextNode(Model.TERM[0].text));
    const event = View.QuickChange.bind(elm);
    const result = event();
    expect(result).to.equal('/search?hl=ja&site=webhp&biw=810&bih=1306&q=duckduckgo&oq=duckduckgo&ie=UTF-8&tbm=');
  });
});
