const Parser = {
  IsUCS() {
    const ucs = document.querySelector('div#ucs');
    return ucs !== null;
  },
  GetRangeByQueryString(Model) {
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
    for (let i = 0; i < h.length; ++i) {
      q.push(h[i]);
    }
    for (let i = 0; i < q.length; ++i) {
      const a = q[i].split('=');
      o[a[0]] = a[1];
    }
    return o;
  },
  RewriteURI(range, q, Model) {
    const pre_path = `/search?hl=ja&site=webhp&biw=810&bih=1306&q=${q}&oq=${q}&ie=UTF-8&`;
    let result_path = "";
    if (Model.VALUE_PATTERN.test(range)) {
      result_path = `${pre_path}tbs=qdr:${range}&tbm=`;
    } else {
      result_path = `${pre_path}tbm=`;
    }
    window.location.href = result_path;
    return result_path;
  },
};

module.exports = Parser;