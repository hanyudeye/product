var http = require("http");
var url = require("url");
var util = require("util");

var querystring = require("querystring");
var server = new http.Server();

server.on("request", function (req, res) {
  res.writeHead(200, {
    //显示中文
    //   "Content-type": "text/html; charset=utf-8",
    //   language: "zh-cn",
    //   encoding:"utf-8"
  });
  // res.write("<h1>Hello,Nodejs World 你好，世界</h1>");
  // 或者
  //     res.write("<html><head> <meta charset='utf-8'></head><h1>Hello,Nodejs World 你好，世界</h1></html>");

  //输出 request 对象中的 url
  //     res.write(util.inspect(url.parse(req.url,true)));

  var post = "";
  req.on("data", function (chunk) {
    post += chunk;
  });

  req.on("end", function () {
    post = querystring.parse(post);
    res.end(util.inspect(post));
  });

  //   res.end();
});

server.listen(3000);
