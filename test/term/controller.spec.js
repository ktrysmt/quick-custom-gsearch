/* eslint-env mocha */
const expect = require('chai').expect;
const Controller = require('../../src/term/controller.js');

describe('Term/Controller >', () => {
  describe('GetRangeByQueryString', () => {
    it('term is a year', () => {
      expect(Controller.GetRangeByQueryString()).to.equal('y');
    });
  });

  describe('Validate', () => {
    it('null case', () => {
      expect(Controller.Validate()).to.equal('none');
    });

    it('empty string case', () => {
      expect(Controller.Validate('')).to.equal('none');
    });

    it('normal case (m3)', () => {
      expect(Controller.Validate('m3')).to.equal('m3');
    });

    it('normal case (y)', () => {
      expect(Controller.Validate('y')).to.equal('y');
    });

    it('illegal case', () => {
      expect(Controller.Validate(null)).to.equal('none');
      expect(Controller.Validate('y4')).to.equal('none');
    });
  });

  describe('RewriteURI', () => {
    it("should be search 'hoge' as 3month", () => {
      const range = 'm3';
      const q = 'hoge';
      const href = Controller.RewriteURI(range, q);
      expect(href).to.equal('/search?q=hoge&tbs=qdr:m3&tbm=');
    });

    it("should be search 'fuga' as all", () => {
      const range = '';
      const q = 'fuga';
      const href = Controller.RewriteURI(range, q);
      expect(href).to.equal('/search?q=fuga&tbm=');
    });
  });
});
