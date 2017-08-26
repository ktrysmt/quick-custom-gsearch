/* eslint-env mocha */
const expect = require('chai').expect;
const Model = require('../src/model.js');

describe('Model', () => {
  const TERM_TEST = {
    0: { data: 'none', text: 'Any time' },
    1: { data: 'm3', text: 'Past 3 Month' },
    2: { data: 'm6', text: 'Past 6 Month' },
    3: { data: 'y', text: 'Past 1 Year' },
    4: { data: 'y2', text: 'Past 2 Year' },
    5: { data: 'y3', text: 'Past 3 Year' },
  };
  const SWITCH_LANGUAGES_TEST = {
    0: { data: '', text: 'Any pages' },
    1: { data: 'lang_en', text: 'English pages' },
    2: { data: 'lang_local', text: 'Local pages' },
  };

  it('Equal VALUE PATTERN', () => {
    expect(Model.TERM_VALUE_PATTERN.toString()).to.equal('/^(m3|m6|y2|y3|y)$/');
  });

  it('Equal ARG PATTERN', () => {
    expect(Model.TERM_ARG_PATTERN.toString()).to.equal('/^qdr:(m3|m6|y|y2|y3)$/');
  });

  it('Deep Equal TERM', () => {
    expect(Model.TERM).to.deep.equal(TERM_TEST);
  });

  it('Deep Equal SWITCH_LANGUAGES', () => {
    expect(Model.SWITCH_LANGUAGES).to.deep.equal(SWITCH_LANGUAGES_TEST);
  });
});
