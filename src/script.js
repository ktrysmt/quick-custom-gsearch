(function(){

    var View = {
      SetCssState: function (t) {
        localStorage.setItem("quick-custom-gsearch",t);
        var a = document.querySelectorAll(".quick-custom-gsearch a");
        Array.prototype.map.call(a, function(e){
            var i = e.getAttribute("data");
            if (i === t) {
              e.className = "active";
            }
            else {
              e.className = "";
            }
        });
      },
      BindElement : function () {
        // define
        var term = {
          0 : { data:"none", text:"Reset" },
          1 : { data:"6month", text:"6 Month" },
          2 : { data:"1year", text:"1 Year" },
          3 : { data:"2year", text:"2 Year" },
          4 : { data:"3year", text:"3 Year" }
        };
        var div = document.createElement("div");
        div.className = "quick-custom-gsearch";
        var a = [];
        a[0] = document.createElement("a"),
        a[1] = a[0].cloneNode(),
        a[2] = a[0].cloneNode(),
        a[3] = a[0].cloneNode(),
        a[4] = a[0].cloneNode();
        var span = [];
        span[0] = document.createElement("span"),
        span[1] = span[0].cloneNode();
        // append
        div.appendChild(span[0]);
        Array.prototype.map.call(a, function(obj, i){
            a[i].setAttribute("data", term[i]['data']);
            a[i].appendChild(document.createTextNode(term[i]['text']));
            a[i].addEventListener("click", View.QuickChange, false);
            div.appendChild(a[i]); 
        });
        div.appendChild(span[1]);
        // insert
        var ucs = document.querySelector("div#ucs");
        ucs.insertBefore(div, ucs.firstChild);
      },    
      QuickChange : function () {
        var t = this.getAttribute("data");
        Model.SetRangeToStorage(t);
        var o = Browser.ParseURI();
        var q = o["q"];
        Browser.RewriteURI(t, q);
      }
    };

    var Model = {
      START : "",
      END : "",
      SetRangeToStorage: function (range) {
        localStorage.setItem("quick-custom-gsearch", range); 
      },                        
      GetRangeFromStorage: function () {
        var t = localStorage.getItem("quick-custom-gsearch");
        if (!t || ( t !== "none" && t !== "6month" && t !== "1year" && t !== "2year" && t !== "3year" )) { 
          t = "none";
          localStorage.setItem("quick-custom-gsearch", t); 
        }
        return t;
      },
      GetStartRange : function (t) {
        var date = new Date();
        if (t === "6month") {
          date.setMonth( date.getMonth() - 6 ); 
        }
        else if (t === "1year") {
          date.setFullYear( date.getFullYear() - 1 ); 
        }
        else if (t === "2year") {
          date.setFullYear( date.getFullYear() - 2 ); 
        } 
        else if (t === "3year") {
          date.setFullYear( date.getFullYear() - 3 ); 
        } 
        else {
          return false;
        }
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        m = (m.toString().length === 1) ? "0" + m.toString() : m.toString();
        d = (d.toString().length === 1) ? "0" + d.toString() : d.toString();
        return y + "/" + m + "/" + d;
      },
      GetEndRange() {
        var to = new Date();
        return to.getFullYear() + "/" + (to.getMonth() + 1) + "/" + to.getDate();  
      } 
    };

    var Browser = {
      IsUCS : function () {
        var ucs = document.querySelector("div#ucs");
        if (ucs === null) {
          return false;
        }
        return true;
      },
      IsAllSearch : function (o) {
        if (typeof(o["tbm"]) === "undefined" || o["tbm"] === "") {
          return true;
        }
        return false; 
      }, 
      ParseURI : function() {
        var s = {};
        var o = {};
        if ( /^\/search$/.test(location.pathname) ) {
          s = location.search.slice(1).split("&");
        }
        else if (location.pathname === "/" || /^\/webhp$/.test(location.pathname)) {
          if (/#q=/.test(location.hash)) {
            s = location.hash.split("#")
          }
          else if (/&q=/.test(location.hash)) {
            s = location.hash.split("&")
          }
        }
        for (var i = 0; i < s.length; ++i) {
          var a = s[i].split('=');    
          o[a[0]] = a[1];         
        }
        return o;
      },
      RewriteURI : function(t, q) {
        var hash    = window.location.search;
        Model.START = Model.GetStartRange(t);
        Model.END   = Model.GetEndRange();
        if (t === "none") {
          var path = "/search?hl=ja&site=webhp&biw=810&bih=1306&q=" + q + "&oq=" + q + "&ie=UTF-8&tbm="; 
          window.location.href = path;
        }
        else {
          var range = "tbs=cdr:1,cd_min:" + Model.START + ",cd_max:" + Model.END
          var path = "/search?hl=ja&site=webhp&biw=810&bih=1306&q=" + q + "&oq=" + q + "&ie=UTF-8&" + range + "&tbm="
          window.location.href = path;
        }
      },
      ReplaceToNeutralIfExistRange : function (){
        var pathname = window.location.pathname;
        var hash     = window.location.search;
        var o        = Browser.ParseURI();
        var q        = (typeof o["q"] !== 'undefined') ? o["q"] : "";
        var pattern  = /(tbs=cdr:1,cd_min:)(.*?)(,cd_max:)/;
        if( hash.match(pattern) && Browser.IsAllSearch(o) ) {
          var path = "/search?hl=ja&site=webhp&biw=810&bih=1306&q=" + q + "&oq=" + q + "&ie=UTF-8&tbm=";
          window.location.href = path;
        }
      }
    };

    var Main = function () {

      var Add = function () {
        var o = Browser.ParseURI();    
        // if (Browser.IsAllSearch(o) === true) {
          var range = Model.GetRangeFromStorage();
          View.BindElement();
          View.SetCssState(range);
        // }
        Model.SetRangeToStorage("none");
      }

      var Purge = function(){
        console.log("purged");
      }

      if (Model.GetRangeFromStorage() === "none") {
        Browser.ReplaceToNeutralIfExistRange();
      }

      var Observer = new MutationObserver( function(mutations) {
          if (Browser.IsUCS() === true){
            var o = Browser.ParseURI();    
            if (Browser.IsAllSearch(o) === true) {
               Add();  
            } 
          } 
          else {
             Purge();
          }
      });
      Observer.observe(document.getElementById("main"), { childList: true });  

      // if (Browser.IsUCS() === false) {
      //   var Observer = new MutationObserver( function(mutations) {
      //       if (Browser.IsUCS() === true) CommonInit();
      //   });
      //   Observer.observe(document.getElementById("main"), { childList: true }); 
      //   return true;
      // }
      // else {
      //   CommonInit();
      //   return true;
      // }

    }

    Main();

})();

