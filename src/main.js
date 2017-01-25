const Parser = require('./parser.js');
const View = require('./view.js');
const Model = require('./model.js');

const Main = () => {
  const Add = () => {
    const own = document.querySelector('.quick-custom-gsearch');
    if (own !== null) {
      return false;
    }

    if (Parser.IsTextSearch() === true && Parser.IsUCS() === true) {
      const div = View.CreateElement();
      View.BindElement(div);
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
