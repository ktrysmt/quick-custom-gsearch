const jsdom = require('jsdom').jsdom;

const html = `<html><head></head><body>
<div id='ucs'><div id='main'></div></div>
</body></html>`;
  // const html = "";

global.document = jsdom(html, {
  url: 'https://www.google.co.jp/search?hl=ja&site=webhp&biw=810&bih=1306&q=duckduckgo&oq=duckduckgo&ie=UTF-8&tbs=qdr:y&tbm=',
});

global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
