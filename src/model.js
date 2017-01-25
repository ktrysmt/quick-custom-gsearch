const Model = {
  VALUE_PATTERN: /^(m3|m6|y2|y3|y)$/,
  ARG_PATTERN: /^qdr:(m3|m6|y|y2|y3)$/,
  TERM: {
    0: { data: 'none', text: 'Normal' },
    1: { data: 'm3', text: '3 Month' },
    2: { data: 'm6', text: '6 Month' },
    3: { data: 'y', text: '1 Year' },
    4: { data: 'y2', text: '2 Year' },
    5: { data: 'y3', text: '3 Year' },
  },
  SWITCH_LANGUAGES = { // lr=, lr=lang_en, lr=lang_local
    "lang_en": "in English",
    "lang_local": "in Local",
  },
};

module.exports = Model;
