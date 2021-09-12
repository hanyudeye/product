var fs = require("fs");

fs.readFile("./event.js", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 指定编码
fs.readFile("./event.js",'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});


// 同步版本,最先运行
let data=fs.readFileSync("./process.js","utf-8");
console.log(data);