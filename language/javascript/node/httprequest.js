var http = require("http");
var querystring = require("querystring");

var contents = querystring.stringify({
  name: "aming",
  email: "1@qq.com",
  address: "jiangsu ",
});

var options = {
  host: "localhost",
  port:3000,
  path: "/application/node/post.php",
  method: "POST",
  Headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": contents.length,
  },
};

var request = new http.request(options, function (res) {
  res.setEncoding("utf-8");
  res.on("data", function (data) {
    console.log(data);
  });
});

request.write(contents);
request.end();