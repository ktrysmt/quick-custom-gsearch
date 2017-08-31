/* eslint-env mocha */
const expect = require('chai').expect;
const Controller = require('../../src/language/controller.js');

describe('Language/Controller >', () => {
  describe('Validate', () => {
    it('null case', () => {
      expect(Controller.Validate()).to.equal('');
    });

    it('empty string case', () => {
      expect(Controller.Validate('')).to.equal('');
    });

    it('normal case (lang_en)', () => {
      expect(Controller.Validate('lang_en')).to.equal('lang_en');
    });

    it('normal case (lang_local)', () => {
      expect(Controller.Validate('lang_local')).to.equal('lang_local');
    });

    it('illegal case', () => {
      expect(Controller.Validate(null)).to.equal('none');
      expect(Controller.Validate('lang_other')).to.equal('none');
    });
  });
});
