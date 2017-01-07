const fsbx = require("fuse-box");

let fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    outFile: "./out.js",
    cache: true,
    plugins: [
      fsbx.UglifyJSPlugin({})
    ]
});

fuseBox.bundle("> ./src/script.js");
