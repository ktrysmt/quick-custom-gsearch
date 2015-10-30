(function(){

    // define
    var START = "";
    var _to = new Date();
    var END = _to.getFullYear() + "/" + (_to.getMonth() + 1) + "/" + _to.getDate();  
    _to = undefined;  

    // funcs
    function prependChild(parent, newChild) {
      parent.insertBefore(newChild, parent.firstChild);
    }
    function setState(t) {
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
    }
    function setRange(t) {
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
      var m = date.getMonth() + 1;
      var d = date.getDate();
      m = (m.toString().length === 1) ? "0" + m.toString() : m.toString();
      d = (d.toString().length === 1) ? "0" + d.toString() : d.toString();
      START = date.getFullYear() + "/" + m + "/" + d;
    }
    function isPlainSearch() {
      var vars = getHash();
      if (typeof(vars["tbm"]) === "undefined" || vars["tbm"] === "") {
        return true;
      }
      else {
        return false;
      }
    }
    function getHash() {
      var vars = [];
      var hash = location.search.slice(1).split('&');    
      for (var i = 0; i < hash.length; i++) {
        var array = hash[i].split('=');    
        vars.push(array[0]);               
        vars[array[0]] = array[1];         
      }  
      return vars;
    }

    // trigger
    function clickQuick() {
      var t = this.getAttribute("data");
      setState(t);
      setRange(t);   
      run(t);
    } 
    function run(t) {
      var hash = window.location.search;
      if (!t || ( t !== "none" && t !== "6month" && t !== "1year" && t !== "2year" && t !== "3year" )) {
        return false;
      }
      var vars = getHash();
      if (t === "none") {
        var pattern = /(tbs=cdr:1,cd_min:)(.*?)(,cd_max:)/;
        if( hash.match(pattern) ) {
          window.location.href = "/search?hl=ja&site=webhp&biw=810&bih=1306&q=" + vars["q"] + "&oq=" + vars["q"] + "&ie=UTF-8&tbm="
        }
      }
      else {
        var range = "tbs=cdr:1,cd_min:" + START + ",cd_max:" + END
        var q = "/search?hl=ja&site=webhp&biw=810&bih=1306&q=" + vars["q"] + "&oq=" + vars["q"] + "&ie=UTF-8&" + range + "&tbm="
        if ( hash.indexOf(range) === -1 ) {
          window.location.href = q;
        } 
      }
    }

    // bind
    function bindElement() {
      var e = document.createElement("div");
      var p = document.querySelector("div.mw");
      var o0 = document.createElement("a");
      var o1 = document.createElement("a");
      var o2 = document.createElement("a");
      var o3 = document.createElement("a");
      var o4 = document.createElement("a");
      var span1 = document.createElement("span");
      var span2 = document.createElement("span");
      e.className = "quick-custom-gsearch"

      o0.setAttribute("href", "javascript:void(0);");
      o0.setAttribute("data", "none");
      o0.appendChild( document.createTextNode("Reset") );
      o0.addEventListener("click",clickQuick,false);

      o1.setAttribute("href", "javascript:void(0);");
      o1.setAttribute("data", "6month");
      o1.appendChild( document.createTextNode("6 Month") );
      o1.addEventListener("click",clickQuick,false);

      o2.setAttribute("href", "javascript:void(0);");
      o2.setAttribute("data", "1year");
      o2.appendChild( document.createTextNode("1 Year") ); 
      o2.addEventListener("click",clickQuick,false);

      o3.setAttribute("href", "javascript:void(0);");
      o3.setAttribute("data", "2year");
      o3.appendChild( document.createTextNode("2 Year") );
      o3.addEventListener("click",clickQuick,false);

      o4.setAttribute("href", "javascript:void(0);");
      o4.setAttribute("data", "3year");
      o4.appendChild( document.createTextNode("3 Year") );
      o4.addEventListener("click",clickQuick,false);
      e.appendChild(span1)
      e.appendChild(o0);
      e.appendChild(o1);
      e.appendChild(o2);
      e.appendChild(o3);
      e.appendChild(o4);    
      e.appendChild(span2)
      prependChild(p,e)
    }

    // run
    if (isPlainSearch()) {
      bindElement();
      var t = localStorage.getItem("quick-custom-gsearch");
      if (typeof t === "undefined" || t === "null") {
        t = "none";
        localStorage.setItem("quick-custom-gsearch",t); 
      }
      setState(t);    
      setRange(t);   
      run(t);
    }

})();

