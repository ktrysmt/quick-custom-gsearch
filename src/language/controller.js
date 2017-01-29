const Model = require('../model.js');
const Parser = require('../parser.js');

const Controller = {
  GetRangeByQueryString() {
    const o = Parser.QueryHashToArray();
    if (typeof o.lr === 'undefined' || o.tbs === '') {
      return 'none';
    }
    if (Model.TERM_ARG_PATTERN.test(o.tbs)) {
      return RegExp.$1;
    }
    return 'none';
  },
  RewriteURI(language, opts) {
    const q = opts.q;
    console.log(opts);
    let resultPath = '';
    const prePath = `/search?hl=ja&site=webhp&biw=810&bih=1306&q=${q}&oq=${q}&ie=UTF-8&`;

    if (Model.SWITCH_LANGUAGES_VALUE_PATTERN.test(language)) {
      resultPath = `${prePath}lr=${language}`;
    } else {
      resultPath = `${prePath}lr=`;
    }

    if (Model.SWITCH_LANGUAGES_VALUE_PATTERN.test(language)) {
      resultPath = `${prePath}tbs=qdr:${language}&tbm=`;
    } else {
      resultPath = `${prePath}tbm=`;
    }

    // window.location.href = resultPath;
    return resultPath;
  },
};

module.exports = Controller;
