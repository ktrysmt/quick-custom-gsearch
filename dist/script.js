/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	const Parser = __webpack_require__(/*! ./parser.js */ 2);
	const View = __webpack_require__(/*! ./view.js */ 3);
	const Model = __webpack_require__(/*! ./model.js */ 1);
	
	const Main = () => {
	  const Add = () => {
	    const own = document.querySelector('.quick-custom-gsearch');
	    if (own !== null) {
	      return false;
	    }
	
	    if (Parser.IsTextSearch() === true && Parser.IsUCS() === true) {
	      View.BindElement(Model);
	      const range = Parser.GetRangeByQueryString(Model);
	      View.SetCssState(range);
	      return true;
	    }
	    return false;
	  };
	
	  const Observer = new MutationObserver(() => {
	    Add();
	  });
	
	  const elm = document.getElementById('main');
	  if (elm !== null) {
	    Add();
	    Observer.observe(elm, { childList: true });
	  }
	};
	
	Main();


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ function(module, exports) {

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
	};
	
	module.exports = Model;


/***/ },
/* 2 */
/*!***********************!*\
  !*** ./src/parser.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	const Model = __webpack_require__(/*! ./model.js */ 1);
	
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


/***/ },
/* 3 */
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	const Model = __webpack_require__(/*! ./model.js */ 1);
	const Parser = __webpack_require__(/*! ./parser.js */ 2);
	
	const View = {
	  SetCssState(range) {
	    const a = document.querySelector(`.quick-custom-gsearch a[data=${range}]`);
	    a.className = 'active';
	  },
	  BindElement() {
	    const term = Model.TERM;
	    const div = document.createElement('div');
	    div.className = 'quick-custom-gsearch';
	    const span = document.createElement('span');
	
	    div.appendChild(span);
	    for (const i of Array(6).keys()) {
	      const elm = document.createElement('a');
	      elm.setAttribute('data', term[i].data);
	      elm.appendChild(document.createTextNode(term[i].text));
	      elm.addEventListener('click', View.QuickChange, false);
	      div.appendChild(elm);
	    }
	    div.appendChild(span.cloneNode());
	
	    const ucs = document.querySelector('div#ucs');
	    ucs.insertBefore(div, ucs.firstChild);
	  },
	  QuickChange() {
	    const range = this.getAttribute('data');
	    const q = Parser.QueryHashToArray().q;
	    Parser.RewriteURI(range, q);
	  },
	};
	
	module.exports = View;


/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map