const Model = {
  TERM_VALUE_PATTERN: /^(w1|m1|m3|m6|y2|y3|y)$/,
  TERM_ARG_PATTERN: /^qdr:(w1|m1|m3|m6|y|y2|y3)$/,
  TERM_INCLUDE_COMMA_PATTERN: /^(qdr:)(w1|m1|m3|m6|y|y2|y3),/,
  TERM: {
    0: { data: 'none', text: 'Any time' },
    1: { data: 'w1', text: 'Past 1 Week' },
    2: { data: 'm1', text: 'Past 1 Month' },
    3: { data: 'm3', text: 'Past 3 Month' },
    4: { data: 'm6', text: 'Past 6 Month' },
    5: { data: 'y', text: 'Past 1 Year' },
    6: { data: 'y2', text: 'Past 2 Year' },
    7: { data: 'y3', text: 'Past 3 Year' },
  },
  SWITCH_LANGUAGES_VALUE_PATTERN: /^(lang_en|lang_local)$/,
  SWITCH_LANGUAGES: {
    0: { data: '', text: 'Any pages' },
    1: { data: 'lang_en', text: 'English pages' },
    2: { data: 'lang_local', text: 'Local pages' },
  },
};

module.exports = Model;
