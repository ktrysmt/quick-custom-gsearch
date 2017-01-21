const Parser = require('./parser.js');
const View = require('./view.js');
const Model = require('./model.js');

const Main = () => {
  const Add = () => {
    if (Parser.IsTextSearch() === true && Parser.IsUCS() === true) {
      View.BindElement(Model);
      const range = Parser.GetRangeByQueryString(Model);
      View.SetCssState(range);
    }
  };

  const Observer = new MutationObserver(() => {
    Add();
  });

  const elm = document.getElementById('main');
  if (elm !== null) {
    Add();
    const own = document.querySelector('.quick-custom-gsearch');
    if (own === null) {
      Observer.observe(elm, { childList: true });
    }
  }
};

Main();
