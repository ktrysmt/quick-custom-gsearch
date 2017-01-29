/* eslint-env mocha */
const expect = require('chai').expect;
const Model = require('../src/model.js');

describe('Model', () => {
  const TERM_TEST = {
    0: { data: 'none', text: 'Normal' },
    1: { data: 'm3', text: '3 Month' },
    2: { data: 'm6', text: '6 Month' },
    3: { data: 'y', text: '1 Year' },
    4: { data: 'y2', text: '2 Year' },
    5: { data: 'y3', text: '3 Year' },
  };
  const SWITCH_LANGUAGES_TEST = {
    0: { data: '', text: 'All Languages' },
    1: { data: 'lang_en', text: 'in English' },
    2: { data: 'lang_local', text: 'in Local' },
  };

  it('Equal VALUE PATTERN', () => {
    expect(Model.VALUE_PATTERN.toString()).to.equal('/^(m3|m6|y2|y3|y)$/');
  });

  it('Equal ARG PATTERN', () => {
    expect(Model.ARG_PATTERN.toString()).to.equal('/^qdr:(m3|m6|y|y2|y3)$/');
  });

  it('Deep Equal TERM', () => {
    expect(Model.TERM).to.deep.equal(TERM_TEST);
  });

  it('Deep Equal SWITCH_LANGUAGES', () => {
    expect(Model.SWITCH_LANGUAGES).to.deep.equal(SWITCH_LANGUAGES_TEST);
  });
});
