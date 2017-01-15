const expect = require("chai").expect;
const View   = require("../src/view.js");
const Model  = require("../src/model.js");
const Parser = require("../src/parser.js");

describe("View", () => {

  const range = "m3";


  it("BindElement", () => {
    View.BindElement(Model);
  });


  it("SetCssState", () => {
    View.SetCssState(range);
  });

  it("QuickChange", () => {
    //  View.QuickChange(Parser);
  });

});
