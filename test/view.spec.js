/* eslint-env mocha */
const View = require('../src/view.js');

describe('View', () => {
  const range = 'm3';

  it('BindElement', () => {
    View.BindElement();
  });


  it('SetCssState', () => {
    View.SetCssState(range);
  });

  it('QuickChange', () => {
    //  View.QuickChange();
  });
});
