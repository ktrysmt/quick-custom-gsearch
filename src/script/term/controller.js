const Model = require('../model.js');
const Parser = require('../parser.js');

const Controller = {
  GetRangeByQueryString() {
    const o = Parser.QueryHashToArray();
    if (typeof o.tbs === 'undefined' || o.tbs === '') {
      return 'none';
    }
    if (Model.TERM_ARG_PATTERN.test(o.tbs)) {
      return RegExp.$1;
    }
    return 'none';
  },
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
  RewriteURI(range, q) {
    const prePath = `/search?q=${q}&`;
    let resultPath = '';
    if (Model.TERM_VALUE_PATTERN.test(range)) {
      resultPath = `${prePath}tbs=qdr:${range}&tbm=`;
    } else {
      resultPath = `${prePath}tbm=`;
    }
    window.location.href = resultPath;
    return resultPath;
  },
};

module.exports = Controller;
