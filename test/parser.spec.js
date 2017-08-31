/* eslint-env mocha */
const expect = require('chai').expect;
const Parser = require('../src/parser.js');

describe('Parser', () => {
  describe('IsUCS', () => {
    it('normal', () => {
      expect(Parser.IsUCS()).to.be.true;
    });
  });

  describe('IsTextSearch', () => {
    it('normal', () => {
      expect(Parser.IsTextSearch()).to.be.true;
    });
  });

  describe('QueryHashToArray', () => {
    const expectArray = {
      hl: 'ja',
      site: 'webhp',
      biw: '810',
      bih: '1306',
      q: 'duckduckgo',
      oq: 'duckduckgo',
      ie: 'UTF-8',
      tbs: 'qdr:y',
      tbm: '',
    };

    it('normal', () => {
      expect(Parser.QueryHashToArray()).to.deep.equal(expectArray);
    });
  });
});
