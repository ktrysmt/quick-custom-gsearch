const Model = require('../model.js');

const Controller = {
  Validate(language) {
    if (typeof language === 'undefined' || language === '') {
      return '';
    }
    if (Model.SWITCH_LANGUAGES_VALUE_PATTERN.test(language)) {
      return RegExp.$1;
    }
    return 'none';
  },
};

module.exports = Controller;
