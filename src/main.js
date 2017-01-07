(function () {
    const View = {
      SetCssState: function (range) {
        let a = document.querySelector('.quick-custom-gsearch a[data=' + range + ']');
        a.className = 'active';
      },
      BindElement: function () {
        const term    = Model.TERM;
        const div       = document.createElement('div');
        div.className = 'quick-custom-gsearch';
        const span    = document.createElement('span');

        div.appendChild(span);
        for (let i of Array(6).keys()) {
          const elm = document.createElement('a')
          elm.setAttribute('data', term[i].data);
          elm.appendChild(document.createTextNode(term[i].text));
          elm.addEventListener('click', View.QuickChange, false);
          div.appendChild(elm);
        }
        div.appendChild(span.cloneNode());

        const ucs = document.querySelector('div#ucs');
        ucs.insertBefore(div, ucs.firstChild);
      },
      QuickChange: function () {
        const range = this.getAttribute('data');
        const q = Browser.QueryHashToArray().q;
        Browser.RewriteURI(range, q);
      }
    };

    var Model = {
      VALUE_PATTERN: /^(m3|m6|y2|y3|y)$/,
      ARG_PATTERN: /^qdr:(m3|m6|y|y2|y3)$/,
      TERM: {
        0: {data: 'none', text: 'Normal'},
        1: {data: 'm3', text: '3 Month'},
        2: {data: 'm6', text: '6 Month'},
        3: {data: 'y', text: '1 Year'},
        4: {data: 'y2', text: '2 Year'},
        5: {data: 'y3', text: '3 Year'}
      }
    };

    var Browser = {
      IsUCS: function () {
        var ucs = document.querySelector('div#ucs');
        return (ucs === null) ? false : true;
      },
      GetRangeByQueryString: () => {
        const o = Browser.QueryHashToArray();
        if (typeof o.tbs === 'undefined' || o.tbs === '') {
          return 'none';
        }
        if (Model.ARG_PATTERN.test(o.tbs)) {
          return RegExp.$1;
        }
        return 'none';
      },
      IsTextSearch: function () {
        const o = Browser.QueryHashToArray();
        if (typeof o.tbm === 'undefined' || o.tbm === '') {
          return true;
        }
        return false;
      },
      QueryHashToArray() {
        let o = {};
        if (location.pathname !== '/' && !/^\/(search|webhp)$/.test(location.pathname)) {
          return o;
        }
        let q = (/&/.test(location.search)) ? location.search.slice(1).split('&') : [];
        const h = (/#/.test(location.hash)) ? location.hash.slice(1).split('&') : [];
        for (let i = 0; i < h.length; ++i) {
          q.push(h[i]);
        }
        for (let i = 0; i < q.length; ++i) {
          const a = q[i].split('=');
          o[a[0]] = a[1];
        }
        return o;
      },
      RewriteURI: function (range, q) {
        const pre_path = '/search?hl=ja&site=webhp&biw=810&bih=1306&q=' + q + '&oq=' + q + '&ie=UTF-8&';
        if (Model.VALUE_PATTERN.test(range)) {
          window.location.href = pre_path + 'tbs=qdr:' + range + '&tbm=';
        } else {
          window.location.href = pre_path + 'tbm=';
        }
      }
    };

    const Main = () => {
      const Add = () => {
        if (Browser.IsTextSearch() === true && Browser.IsUCS() === true) {
          View.BindElement();
          const range = Browser.GetRangeByQueryString();
          View.SetCssState(range);
        }
      };

      const Observer = new MutationObserver( () => {
          Add();
      });

      const e = document.getElementById('main');
      if (e !== null) {
        Add();
        Observer.observe(e, {childList: true});
      }
    };

    Main();
})();

