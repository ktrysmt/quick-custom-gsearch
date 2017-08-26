!function(n){function e(c){if(t[c])return t[c].exports;var g=t[c]={i:c,l:!1,exports:{}};return n[c].call(g.exports,g,g.exports,e),g.l=!0,g.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,c){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:c})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=7)}([function(module,exports){eval("const Model = {\n  TERM_VALUE_PATTERN: /^(m3|m6|y2|y3|y)$/,\n  TERM_ARG_PATTERN: /^qdr:(m3|m6|y|y2|y3)$/,\n  TERM_INCLUDE_COMMA_PATTERN: /^(qdr:)(m3|m6|y|y2|y3),/,\n  TERM: {\n    0: { data: 'none', text: 'Any time' },\n    1: { data: 'm3', text: 'Past 3 Month' },\n    2: { data: 'm6', text: 'Past 6 Month' },\n    3: { data: 'y', text: 'Past 1 Year' },\n    4: { data: 'y2', text: 'Past 2 Year' },\n    5: { data: 'y3', text: 'Past 3 Year' },\n  },\n  SWITCH_LANGUAGES_VALUE_PATTERN: /^(lang_en|lang_local)$/,\n  SWITCH_LANGUAGES: {\n    0: { data: '', text: 'Any pages' },\n    1: { data: 'lang_en', text: 'English pages' },\n    2: { data: 'lang_local', text: 'Local pages' },\n  },\n};\n\nmodule.exports = Model;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcz85NGVjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vZGVsID0ge1xuICBURVJNX1ZBTFVFX1BBVFRFUk46IC9eKG0zfG02fHkyfHkzfHkpJC8sXG4gIFRFUk1fQVJHX1BBVFRFUk46IC9ecWRyOihtM3xtNnx5fHkyfHkzKSQvLFxuICBURVJNX0lOQ0xVREVfQ09NTUFfUEFUVEVSTjogL14ocWRyOikobTN8bTZ8eXx5Mnx5MyksLyxcbiAgVEVSTToge1xuICAgIDA6IHsgZGF0YTogJ25vbmUnLCB0ZXh0OiAnQW55IHRpbWUnIH0sXG4gICAgMTogeyBkYXRhOiAnbTMnLCB0ZXh0OiAnUGFzdCAzIE1vbnRoJyB9LFxuICAgIDI6IHsgZGF0YTogJ202JywgdGV4dDogJ1Bhc3QgNiBNb250aCcgfSxcbiAgICAzOiB7IGRhdGE6ICd5JywgdGV4dDogJ1Bhc3QgMSBZZWFyJyB9LFxuICAgIDQ6IHsgZGF0YTogJ3kyJywgdGV4dDogJ1Bhc3QgMiBZZWFyJyB9LFxuICAgIDU6IHsgZGF0YTogJ3kzJywgdGV4dDogJ1Bhc3QgMyBZZWFyJyB9LFxuICB9LFxuICBTV0lUQ0hfTEFOR1VBR0VTX1ZBTFVFX1BBVFRFUk46IC9eKGxhbmdfZW58bGFuZ19sb2NhbCkkLyxcbiAgU1dJVENIX0xBTkdVQUdFUzoge1xuICAgIDA6IHsgZGF0YTogJycsIHRleHQ6ICdBbnkgcGFnZXMnIH0sXG4gICAgMTogeyBkYXRhOiAnbGFuZ19lbicsIHRleHQ6ICdFbmdsaXNoIHBhZ2VzJyB9LFxuICAgIDI6IHsgZGF0YTogJ2xhbmdfbG9jYWwnLCB0ZXh0OiAnTG9jYWwgcGFnZXMnIH0sXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},function(module,exports,__webpack_require__){eval("const Model = __webpack_require__(/*! ./model.js */ 0);\n\nconst Parser = {\n  IsUCS() {\n    const ucs = document.querySelector('div#ucs');\n    return ucs !== null;\n  },\n  IsTextSearch() {\n    const o = Parser.QueryHashToArray();\n    if (\n      (typeof o.tbs === 'undefined' || typeof o.lr === 'undefined')\n      && Object.keys(o).length < 3\n    ) {\n      return false;\n    }\n    if (typeof o.tbm === 'undefined' || o.tbm === '') {\n      return true;\n    }\n    return false;\n  },\n  QueryHashToArray() {\n    const o = {};\n    if (window.location.pathname !== '/' && !/^\\/(search|webhp)$/.test(window.location.pathname)) {\n      return o;\n    }\n    const q = (/&/.test(window.location.search)) ? decodeURIComponent(window.location.search).slice(1).split('&') : [];\n    const h = (/#/.test(window.location.hash)) ? decodeURIComponent(window.location.hash).slice(1).split('&') : [];\n\n    if (h.length > 0) {\n      for (let i = 0; i < h.length; ++i) {\n        const a = h[i].split('=');\n        o[a[0]] = a[1];\n      }\n      return o;\n    }\n    for (let i = 0; i < q.length; ++i) {\n      const a = q[i].split('=');\n      o[a[0]] = a[1];\n    }\n    o.tbs = Parser.fixTbsComma(o.tbs);\n    return o;\n  },\n  fixTbsComma(str) {\n    if (Model.TERM_INCLUDE_COMMA_PATTERN.test(str)) {\n      return RegExp.$1 + RegExp.$2;\n    }\n    return str;\n  },\n  BuildParameterByQueryObject(opts) {\n    const array = Object.keys(opts).map(key => `${key}=${opts[key]}`);\n    return array.join('&');\n  },\n  RewriteURI(parameter) {\n    const path = `/search?${parameter}`;\n    window.location.href = path;\n    return path;\n  },\n};\n\nmodule.exports = Parser;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJzZXIuanM/MjYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwuanMnKTtcblxuY29uc3QgUGFyc2VyID0ge1xuICBJc1VDUygpIHtcbiAgICBjb25zdCB1Y3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjdWNzJyk7XG4gICAgcmV0dXJuIHVjcyAhPT0gbnVsbDtcbiAgfSxcbiAgSXNUZXh0U2VhcmNoKCkge1xuICAgIGNvbnN0IG8gPSBQYXJzZXIuUXVlcnlIYXNoVG9BcnJheSgpO1xuICAgIGlmIChcbiAgICAgICh0eXBlb2Ygby50YnMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBvLmxyID09PSAndW5kZWZpbmVkJylcbiAgICAgICYmIE9iamVjdC5rZXlzKG8pLmxlbmd0aCA8IDNcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvLnRibSA9PT0gJ3VuZGVmaW5lZCcgfHwgby50Ym0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBRdWVyeUhhc2hUb0FycmF5KCkge1xuICAgIGNvbnN0IG8gPSB7fTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycgJiYgIS9eXFwvKHNlYXJjaHx3ZWJocCkkLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICBjb25zdCBxID0gKC8mLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpKSA/IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5zbGljZSgxKS5zcGxpdCgnJicpIDogW107XG4gICAgY29uc3QgaCA9ICgvIy8udGVzdCh3aW5kb3cubG9jYXRpb24uaGFzaCkpID8gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5zbGljZSgxKS5zcGxpdCgnJicpIDogW107XG5cbiAgICBpZiAoaC5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGgubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgYSA9IGhbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgb1thWzBdXSA9IGFbMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBhID0gcVtpXS5zcGxpdCgnPScpO1xuICAgICAgb1thWzBdXSA9IGFbMV07XG4gICAgfVxuICAgIG8udGJzID0gUGFyc2VyLmZpeFRic0NvbW1hKG8udGJzKTtcbiAgICByZXR1cm4gbztcbiAgfSxcbiAgZml4VGJzQ29tbWEoc3RyKSB7XG4gICAgaWYgKE1vZGVsLlRFUk1fSU5DTFVERV9DT01NQV9QQVRURVJOLnRlc3Qoc3RyKSkge1xuICAgICAgcmV0dXJuIFJlZ0V4cC4kMSArIFJlZ0V4cC4kMjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfSxcbiAgQnVpbGRQYXJhbWV0ZXJCeVF1ZXJ5T2JqZWN0KG9wdHMpIHtcbiAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKG9wdHMpLm1hcChrZXkgPT4gYCR7a2V5fT0ke29wdHNba2V5XX1gKTtcbiAgICByZXR1cm4gYXJyYXkuam9pbignJicpO1xuICB9LFxuICBSZXdyaXRlVVJJKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHBhdGggPSBgL3NlYXJjaD8ke3BhcmFtZXRlcn1gO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aDtcbiAgICByZXR1cm4gcGF0aDtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==")},function(module,exports,__webpack_require__){eval("const Model = __webpack_require__(/*! ../model.js */ 0);\n\nconst Controller = {\n  Validate(language) {\n    if (typeof language === 'undefined' || language === '') {\n      return '';\n    }\n    if (Model.SWITCH_LANGUAGES_VALUE_PATTERN.test(language)) {\n      return RegExp.$1;\n    }\n    return 'none';\n  },\n};\n\nmodule.exports = Controller;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYW5ndWFnZS9jb250cm9sbGVyLmpzPzdhMWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC5qcycpO1xuXG5jb25zdCBDb250cm9sbGVyID0ge1xuICBWYWxpZGF0ZShsYW5ndWFnZSkge1xuICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICd1bmRlZmluZWQnIHx8IGxhbmd1YWdlID09PSAnJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAoTW9kZWwuU1dJVENIX0xBTkdVQUdFU19WQUxVRV9QQVRURVJOLnRlc3QobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gUmVnRXhwLiQxO1xuICAgIH1cbiAgICByZXR1cm4gJ25vbmUnO1xuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGFuZ3VhZ2UvY29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports,__webpack_require__){eval("const Model = __webpack_require__(/*! ../model.js */ 0);\nconst Parser = __webpack_require__(/*! ../parser.js */ 1);\n\nconst Controller = {\n  GetRangeByQueryString() {\n    const o = Parser.QueryHashToArray();\n    if (typeof o.tbs === 'undefined' || o.tbs === '') {\n      return 'none';\n    }\n    if (Model.TERM_ARG_PATTERN.test(o.tbs)) {\n      return RegExp.$1;\n    }\n    return 'none';\n  },\n  Validate(term) {\n    if (typeof term === 'undefined' || term === '') {\n      return 'none';\n    }\n    if (Model.TERM_VALUE_PATTERN.test(term)) {\n      return RegExp.$1;\n    }\n    if (Model.TERM_ARG_PATTERN.test(term)) {\n      return RegExp.$1;\n    }\n    return 'none';\n  },\n  RewriteURI(range, q) {\n    const prePath = `/search?q=${q}&`;\n    let resultPath = '';\n    if (Model.TERM_VALUE_PATTERN.test(range)) {\n      resultPath = `${prePath}tbs=qdr:${range}&tbm=`;\n    } else {\n      resultPath = `${prePath}tbm=`;\n    }\n    window.location.href = resultPath;\n    return resultPath;\n  },\n};\n\nmodule.exports = Controller;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZXJtL2NvbnRyb2xsZXIuanM/NzAzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsLmpzJyk7XG5jb25zdCBQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXIuanMnKTtcblxuY29uc3QgQ29udHJvbGxlciA9IHtcbiAgR2V0UmFuZ2VCeVF1ZXJ5U3RyaW5nKCkge1xuICAgIGNvbnN0IG8gPSBQYXJzZXIuUXVlcnlIYXNoVG9BcnJheSgpO1xuICAgIGlmICh0eXBlb2Ygby50YnMgPT09ICd1bmRlZmluZWQnIHx8IG8udGJzID09PSAnJykge1xuICAgICAgcmV0dXJuICdub25lJztcbiAgICB9XG4gICAgaWYgKE1vZGVsLlRFUk1fQVJHX1BBVFRFUk4udGVzdChvLnRicykpIHtcbiAgICAgIHJldHVybiBSZWdFeHAuJDE7XG4gICAgfVxuICAgIHJldHVybiAnbm9uZSc7XG4gIH0sXG4gIFZhbGlkYXRlKHRlcm0pIHtcbiAgICBpZiAodHlwZW9mIHRlcm0gPT09ICd1bmRlZmluZWQnIHx8IHRlcm0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gJ25vbmUnO1xuICAgIH1cbiAgICBpZiAoTW9kZWwuVEVSTV9WQUxVRV9QQVRURVJOLnRlc3QodGVybSkpIHtcbiAgICAgIHJldHVybiBSZWdFeHAuJDE7XG4gICAgfVxuICAgIGlmIChNb2RlbC5URVJNX0FSR19QQVRURVJOLnRlc3QodGVybSkpIHtcbiAgICAgIHJldHVybiBSZWdFeHAuJDE7XG4gICAgfVxuICAgIHJldHVybiAnbm9uZSc7XG4gIH0sXG4gIFJld3JpdGVVUkkocmFuZ2UsIHEpIHtcbiAgICBjb25zdCBwcmVQYXRoID0gYC9zZWFyY2g/cT0ke3F9JmA7XG4gICAgbGV0IHJlc3VsdFBhdGggPSAnJztcbiAgICBpZiAoTW9kZWwuVEVSTV9WQUxVRV9QQVRURVJOLnRlc3QocmFuZ2UpKSB7XG4gICAgICByZXN1bHRQYXRoID0gYCR7cHJlUGF0aH10YnM9cWRyOiR7cmFuZ2V9JnRibT1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRQYXRoID0gYCR7cHJlUGF0aH10Ym09YDtcbiAgICB9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXN1bHRQYXRoO1xuICAgIHJldHVybiByZXN1bHRQYXRoO1xuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVybS9jb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},function(module,exports,__webpack_require__){eval("const Model = __webpack_require__(/*! ../model.js */ 0);\nconst Parser = __webpack_require__(/*! ../parser.js */ 1);\nconst Controller = __webpack_require__(/*! ./controller.js */ 2);\n\nconst LanguageView = {\n  SetCssState(language) {\n    if (language === 'none') {\n      return false;\n    }\n    const value = (language) ? `=${language}` : '=\"\"';\n    const a = document.querySelector(`.quick-custom-gsearch .language a[data${value}]`);\n    a.className = 'active';\n    return true;\n  },\n  CreateElement() {\n    const languages = Model.SWITCH_LANGUAGES;\n    const div = document.createElement('div');\n    div.className = 'language';\n    const spanHead = document.createElement('span');\n    const spanTail = spanHead.cloneNode();\n    spanHead.innerText = 'Language';\n    spanHead.className = 'head';\n\n    div.appendChild(spanHead);\n    Object.keys(languages).forEach((i) => {\n      const elm = document.createElement('a');\n      elm.setAttribute('data', languages[i].data);\n      elm.appendChild(document.createTextNode(languages[i].text));\n      elm.addEventListener('click', LanguageView.QuickChange.bind(elm), false);\n      div.appendChild(elm);\n    });\n    div.appendChild(spanTail);\n    return div;\n  },\n  BindElement(div) {\n    const target = document.querySelector('div.quick-custom-gsearch');\n    target.insertBefore(div, target.firstChild);\n  },\n  QuickChange() {\n    const language = this.getAttribute('data');\n    const o = Parser.QueryHashToArray();\n    if (language !== 'none') {\n      o.lr = Controller.Validate(language);\n    }\n    const parameter = Parser.BuildParameterByQueryObject(o);\n    return Parser.RewriteURI(parameter);\n  },\n};\n\nmodule.exports = LanguageView;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYW5ndWFnZS92aWV3LmpzPzMxOWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC5qcycpO1xuY29uc3QgUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2VyLmpzJyk7XG5jb25zdCBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVyLmpzJyk7XG5cbmNvbnN0IExhbmd1YWdlVmlldyA9IHtcbiAgU2V0Q3NzU3RhdGUobGFuZ3VhZ2UpIHtcbiAgICBpZiAobGFuZ3VhZ2UgPT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IChsYW5ndWFnZSkgPyBgPSR7bGFuZ3VhZ2V9YCA6ICc9XCJcIic7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5xdWljay1jdXN0b20tZ3NlYXJjaCAubGFuZ3VhZ2UgYVtkYXRhJHt2YWx1ZX1dYCk7XG4gICAgYS5jbGFzc05hbWUgPSAnYWN0aXZlJztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgQ3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBsYW5ndWFnZXMgPSBNb2RlbC5TV0lUQ0hfTEFOR1VBR0VTO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnbGFuZ3VhZ2UnO1xuICAgIGNvbnN0IHNwYW5IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW5UYWlsID0gc3BhbkhlYWQuY2xvbmVOb2RlKCk7XG4gICAgc3BhbkhlYWQuaW5uZXJUZXh0ID0gJ0xhbmd1YWdlJztcbiAgICBzcGFuSGVhZC5jbGFzc05hbWUgPSAnaGVhZCc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbkhlYWQpO1xuICAgIE9iamVjdC5rZXlzKGxhbmd1YWdlcykuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGxhbmd1YWdlc1tpXS5kYXRhKTtcbiAgICAgIGVsbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYW5ndWFnZXNbaV0udGV4dCkpO1xuICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTGFuZ3VhZ2VWaWV3LlF1aWNrQ2hhbmdlLmJpbmQoZWxtKSwgZmFsc2UpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGVsbSk7XG4gICAgfSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW5UYWlsKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuICBCaW5kRWxlbWVudChkaXYpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucXVpY2stY3VzdG9tLWdzZWFyY2gnKTtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKGRpdiwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICB9LFxuICBRdWlja0NoYW5nZSgpIHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgY29uc3QgbyA9IFBhcnNlci5RdWVyeUhhc2hUb0FycmF5KCk7XG4gICAgaWYgKGxhbmd1YWdlICE9PSAnbm9uZScpIHtcbiAgICAgIG8ubHIgPSBDb250cm9sbGVyLlZhbGlkYXRlKGxhbmd1YWdlKTtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1ldGVyID0gUGFyc2VyLkJ1aWxkUGFyYW1ldGVyQnlRdWVyeU9iamVjdChvKTtcbiAgICByZXR1cm4gUGFyc2VyLlJld3JpdGVVUkkocGFyYW1ldGVyKTtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2VWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGFuZ3VhZ2Uvdmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},function(module,exports){eval("const MainView = {\n  CreateElement() {\n    const mainDiv = document.createElement('div');\n    mainDiv.className = 'quick-custom-gsearch';\n    const termDiv = document.createElement('div');\n    termDiv.className = 'term';\n    const languageDiv = document.createElement('div');\n    languageDiv.className = 'language';\n\n    return mainDiv;\n  },\n  BindElement(div) {\n    const ucs = document.querySelector('div#ucs');\n    ucs.insertBefore(div, ucs.firstChild);\n  },\n};\n\nmodule.exports = MainView;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluVmlldy5qcz9iNjgyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1haW5WaWV3ID0ge1xuICBDcmVhdGVFbGVtZW50KCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9ICdxdWljay1jdXN0b20tZ3NlYXJjaCc7XG4gICAgY29uc3QgdGVybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlcm1EaXYuY2xhc3NOYW1lID0gJ3Rlcm0nO1xuICAgIGNvbnN0IGxhbmd1YWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFuZ3VhZ2VEaXYuY2xhc3NOYW1lID0gJ2xhbmd1YWdlJztcblxuICAgIHJldHVybiBtYWluRGl2O1xuICB9LFxuICBCaW5kRWxlbWVudChkaXYpIHtcbiAgICBjb25zdCB1Y3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjdWNzJyk7XG4gICAgdWNzLmluc2VydEJlZm9yZShkaXYsIHVjcy5maXJzdENoaWxkKTtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFpblZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports,__webpack_require__){eval("const Model = __webpack_require__(/*! ../model.js */ 0);\nconst Parser = __webpack_require__(/*! ../parser.js */ 1);\nconst Controller = __webpack_require__(/*! ./controller.js */ 3);\n\nconst TermView = {\n  SetCssState(range) {\n    const a = document.querySelector(`.quick-custom-gsearch .term a[data=${range}]`);\n    a.className = 'active';\n  },\n  CreateElement() {\n    const term = Model.TERM;\n    const div = document.createElement('div');\n    div.className = 'term';\n    const spanHead = document.createElement('span');\n    const spanTail = spanHead.cloneNode();\n    spanHead.innerText = 'Term';\n    spanHead.className = 'head';\n\n    div.appendChild(spanHead);\n    Object.keys(term).forEach((i) => {\n      const elm = document.createElement('a');\n      elm.setAttribute('data', term[i].data);\n      elm.appendChild(document.createTextNode(term[i].text));\n      elm.addEventListener('click', TermView.QuickChange.bind(elm), false);\n      div.appendChild(elm);\n    });\n    div.appendChild(spanTail);\n    return div;\n  },\n  BindElement(div) {\n    const target = document.querySelector('div.quick-custom-gsearch');\n    target.insertBefore(div, target.firstChild);\n  },\n  QuickChange() {\n    const range = this.getAttribute('data');\n    const o = Parser.QueryHashToArray();\n    if (range === 'none') {\n      delete o.tbs;\n    } else {\n      o.tbs = `qdr:${Controller.Validate(range)}`;\n    }\n    o.tbm = '';\n    const parameter = Parser.BuildParameterByQueryObject(o);\n    return Parser.RewriteURI(parameter);\n  },\n};\n\nmodule.exports = TermView;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZXJtL3ZpZXcuanM/OWNmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsLmpzJyk7XG5jb25zdCBQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXIuanMnKTtcbmNvbnN0IENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXIuanMnKTtcblxuY29uc3QgVGVybVZpZXcgPSB7XG4gIFNldENzc1N0YXRlKHJhbmdlKSB7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5xdWljay1jdXN0b20tZ3NlYXJjaCAudGVybSBhW2RhdGE9JHtyYW5nZX1dYCk7XG4gICAgYS5jbGFzc05hbWUgPSAnYWN0aXZlJztcbiAgfSxcbiAgQ3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCB0ZXJtID0gTW9kZWwuVEVSTTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3Rlcm0nO1xuICAgIGNvbnN0IHNwYW5IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW5UYWlsID0gc3BhbkhlYWQuY2xvbmVOb2RlKCk7XG4gICAgc3BhbkhlYWQuaW5uZXJUZXh0ID0gJ1Rlcm0nO1xuICAgIHNwYW5IZWFkLmNsYXNzTmFtZSA9ICdoZWFkJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuSGVhZCk7XG4gICAgT2JqZWN0LmtleXModGVybSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnZGF0YScsIHRlcm1baV0uZGF0YSk7XG4gICAgICBlbG0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGVybVtpXS50ZXh0KSk7XG4gICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUZXJtVmlldy5RdWlja0NoYW5nZS5iaW5kKGVsbSksIGZhbHNlKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChlbG0pO1xuICAgIH0pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuVGFpbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcbiAgQmluZEVsZW1lbnQoZGl2KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnF1aWNrLWN1c3RvbS1nc2VhcmNoJyk7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShkaXYsIHRhcmdldC5maXJzdENoaWxkKTtcbiAgfSxcbiAgUXVpY2tDaGFuZ2UoKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIGNvbnN0IG8gPSBQYXJzZXIuUXVlcnlIYXNoVG9BcnJheSgpO1xuICAgIGlmIChyYW5nZSA9PT0gJ25vbmUnKSB7XG4gICAgICBkZWxldGUgby50YnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG8udGJzID0gYHFkcjoke0NvbnRyb2xsZXIuVmFsaWRhdGUocmFuZ2UpfWA7XG4gICAgfVxuICAgIG8udGJtID0gJyc7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gUGFyc2VyLkJ1aWxkUGFyYW1ldGVyQnlRdWVyeU9iamVjdChvKTtcbiAgICByZXR1cm4gUGFyc2VyLlJld3JpdGVVUkkocGFyYW1ldGVyKTtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXJtL3ZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},function(module,exports,__webpack_require__){eval("const Parser = __webpack_require__(/*! ./parser.js */ 1);\nconst LanguageController = __webpack_require__(/*! ./language/controller.js */ 2);\nconst TermController = __webpack_require__(/*! ./term/controller.js */ 3);\nconst LanguageView = __webpack_require__(/*! ./language/view.js */ 4);\nconst TermView = __webpack_require__(/*! ./term/view.js */ 6);\nconst MainView = __webpack_require__(/*! ./mainView.js */ 5);\n\nconst Add = () => {\n  const own = document.querySelector('.quick-custom-gsearch');\n  if (own !== null) {\n    return false;\n  }\n\n  if (Parser.IsTextSearch() === true && Parser.IsUCS() === true) {\n    // MainView\n    const mainDiv = MainView.CreateElement();\n    MainView.BindElement(mainDiv);\n    // LanguageView\n    const languageDiv = LanguageView.CreateElement();\n    LanguageView.BindElement(languageDiv);\n    // TermView\n    const termDiv = TermView.CreateElement();\n    TermView.BindElement(termDiv);\n\n    const o = Parser.QueryHashToArray();\n    const range = TermController.Validate(o.tbs);\n    const language = LanguageController.Validate(o.lr);\n    TermView.SetCssState(range);\n    LanguageView.SetCssState(language);\n    return true;\n  }\n  return false;\n};\n\nconst Main = () => {\n  const Observer = new MutationObserver(() => {\n    Add();\n  });\n\n  const elm = document.getElementById('main');\n  if (elm !== null) {\n    Add();\n    Observer.observe(elm, { childList: true });\n  }\n};\n\nMain();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzM0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXIuanMnKTtcbmNvbnN0IExhbmd1YWdlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbGFuZ3VhZ2UvY29udHJvbGxlci5qcycpO1xuY29uc3QgVGVybUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3Rlcm0vY29udHJvbGxlci5qcycpO1xuY29uc3QgTGFuZ3VhZ2VWaWV3ID0gcmVxdWlyZSgnLi9sYW5ndWFnZS92aWV3LmpzJyk7XG5jb25zdCBUZXJtVmlldyA9IHJlcXVpcmUoJy4vdGVybS92aWV3LmpzJyk7XG5jb25zdCBNYWluVmlldyA9IHJlcXVpcmUoJy4vbWFpblZpZXcuanMnKTtcblxuY29uc3QgQWRkID0gKCkgPT4ge1xuICBjb25zdCBvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpY2stY3VzdG9tLWdzZWFyY2gnKTtcbiAgaWYgKG93biAhPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChQYXJzZXIuSXNUZXh0U2VhcmNoKCkgPT09IHRydWUgJiYgUGFyc2VyLklzVUNTKCkgPT09IHRydWUpIHtcbiAgICAvLyBNYWluVmlld1xuICAgIGNvbnN0IG1haW5EaXYgPSBNYWluVmlldy5DcmVhdGVFbGVtZW50KCk7XG4gICAgTWFpblZpZXcuQmluZEVsZW1lbnQobWFpbkRpdik7XG4gICAgLy8gTGFuZ3VhZ2VWaWV3XG4gICAgY29uc3QgbGFuZ3VhZ2VEaXYgPSBMYW5ndWFnZVZpZXcuQ3JlYXRlRWxlbWVudCgpO1xuICAgIExhbmd1YWdlVmlldy5CaW5kRWxlbWVudChsYW5ndWFnZURpdik7XG4gICAgLy8gVGVybVZpZXdcbiAgICBjb25zdCB0ZXJtRGl2ID0gVGVybVZpZXcuQ3JlYXRlRWxlbWVudCgpO1xuICAgIFRlcm1WaWV3LkJpbmRFbGVtZW50KHRlcm1EaXYpO1xuXG4gICAgY29uc3QgbyA9IFBhcnNlci5RdWVyeUhhc2hUb0FycmF5KCk7XG4gICAgY29uc3QgcmFuZ2UgPSBUZXJtQ29udHJvbGxlci5WYWxpZGF0ZShvLnRicyk7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBMYW5ndWFnZUNvbnRyb2xsZXIuVmFsaWRhdGUoby5scik7XG4gICAgVGVybVZpZXcuU2V0Q3NzU3RhdGUocmFuZ2UpO1xuICAgIExhbmd1YWdlVmlldy5TZXRDc3NTdGF0ZShsYW5ndWFnZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgQWRkKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIGlmIChlbG0gIT09IG51bGwpIHtcbiAgICBBZGQoKTtcbiAgICBPYnNlcnZlci5vYnNlcnZlKGVsbSwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIH1cbn07XG5cbk1haW4oKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==")}]);