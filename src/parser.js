const Model = require('./model.js');

const Parser = {
  IsUCS() {
    const ucs = document.querySelector('div#ucs');
    return ucs !== null;
  },
  IsTextSearch() {
    const o = Parser.QueryHashToArray();
    if (
      (typeof o.tbs === 'undefined' || typeof o.lr === 'undefined')
      && Object.keys(o).length < 3
    ) {
      return false;
    }
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
    const q = (/&/.test(window.location.search)) ? decodeURIComponent(window.location.search).slice(1).split('&') : [];
    const h = (/#/.test(window.location.hash)) ? decodeURIComponent(window.location.hash).slice(1).split('&') : [];

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
    o.tbs = Parser.fixTbsComma(o.tbs);
    return o;
  },
  fixTbsComma(str) {
    if (Model.TERM_INCLUDE_COMMA_PATTERN.test(str)) {
      return RegExp.$1 + RegExp.$2;
    }
    return str;
  },
  BuildParameterByQueryObject(opts) {
    const array = Object.keys(opts).map(key => `${key}=${opts[key]}`);
    return array.join('&');
  },
  RewriteURI(parameter) {
    const path = `/search?${parameter}`;
    window.location.href = path;
    return path;
  },
};

module.exports = Parser;
