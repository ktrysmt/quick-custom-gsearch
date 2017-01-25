const Model = require('./model.js');

const Parser = {
  IsUCS() {
    const ucs = document.querySelector('div#ucs');
    return ucs !== null;
  },
  GetRangeByQueryString() {
    const o = Parser.QueryHashToArray();
    if (typeof o.tbs === 'undefined' || o.tbs === '') {
      return 'none';
    }
    if (Model.ARG_PATTERN.test(o.tbs)) {
      return RegExp.$1;
    }
    return 'none';
  },
  IsTextSearch() {
    const o = Parser.QueryHashToArray();
    if (typeof o.tbm === 'undefined' || o.tbm === '') {
      return true;
    }
    return false;
  },
  QueryHashToArray() {
    const o = {};
    if (window.location.pathname !== '/' && !/^\/(search|webhp)$/.test(window.location.pathname)) {
      return o;
    }
    const q = (/&/.test(window.location.search)) ? window.location.search.slice(1).split('&') : [];
    const h = (/#/.test(window.location.hash)) ? window.location.hash.slice(1).split('&') : [];

    if (h.length > 0) {
      for (let i = 0; i < h.length; ++i) {
        const a = h[i].split('=');
        o[a[0]] = a[1];
      }
      return o;
    }
    for (let i = 0; i < q.length; ++i) {
      const a = q[i].split('=');
      o[a[0]] = a[1];
    }
    return o;
  },
  RewriteURI(range, q) {
    const prePath = `/search?hl=ja&site=webhp&biw=810&bih=1306&q=${q}&oq=${q}&ie=UTF-8&`;
    let resultPath = '';
    if (Model.VALUE_PATTERN.test(range)) {
      resultPath = `${prePath}tbs=qdr:${range}&tbm=`;
    } else {
      resultPath = `${prePath}tbm=`;
    }
    window.location.href = resultPath;
    return resultPath;
  },
};

module.exports = Parser;
