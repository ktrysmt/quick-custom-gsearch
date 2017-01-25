/* eslint-env mocha */
const expect = require('chai').expect;
const Parser = require('../src/parser.js');

describe('Parser', () => {
  it('IsUCS', () => {
    expect(Parser.IsUCS()).to.be.true;
  });


  it('IsTextSearch', () => {
    expect(Parser.IsTextSearch()).to.be.true;
  });

  it('GetRangeByQueryString', () => {
    expect(Parser.GetRangeByQueryString()).to.equal('y');
  });

  describe('RewriteURI', () => {
    it("should be search 'hoge' as 3month", () => {
      const range = 'm3';
      const q = 'hoge';
      const href = Parser.RewriteURI(range, q);
      expect(href).to.equal('/search?hl=ja&site=webhp&biw=810&bih=1306&q=hoge&oq=hoge&ie=UTF-8&tbs=qdr:m3&tbm=');
    });

    it("should be search 'fuga' as all", () => {
      const range = '';
      const q = 'fuga';
      const href = Parser.RewriteURI(range, q);
      expect(href).to.equal('/search?hl=ja&site=webhp&biw=810&bih=1306&q=fuga&oq=fuga&ie=UTF-8&tbm=');
    });
  });
});
