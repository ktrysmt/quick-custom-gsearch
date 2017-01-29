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
});
