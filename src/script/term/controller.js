const Model = require('../model.js');

const Controller = {
  Validate(term) {
    if (typeof term === 'undefined' || term === '') {
      return 'none';
    }
    if (Model.TERM_VALUE_PATTERN.test(term)) {
      return RegExp.$1;
    }
    if (Model.TERM_ARG_PATTERN.test(term)) {
      return RegExp.$1;
    }
    return 'none';
  },
};

module.exports = Controller;
