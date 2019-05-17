//首先，我们通过 require 加载了 http 和 fs 这两个模块。
var http = require("http")
var fs = require("fs")

//然后，用内置模块去创建一个 server。
http.createServer(function(req, res) {
  
  //❗️静态服务器：
  if(req.url === "/index.html") {
    //如果请求为 /index.html ，则设置响应头为：
    res.setHeader("Content-Type", "text/html; charset = utf-8")

    //然后，用 utf-8 的方式去读当前这个文件：
    var html = fs.readFileSync("public/index.html", "utf-8")

    //读完之后，得到 html ，然后把它写在响应体里：
    res.write(html)

  //❗️动态接口：   
  }else if(req.url = "/getNews") {
    //当用户的请求是 /getNews ，则设置响应头为：
    res.setHeader("Content-Type", "application/json; charset = utf-8")

    //我们可以随便写一些数据进行测试：
    var rawData = [
      "新闻 01",
      "新闻 02",
      "新闻 03",
      "新闻 04",
      "新闻 05",
      "新闻 06",
      "新闻 07",
      "新闻 08",
      "新闻 09",
      "新闻 10",
      "新闻 11",
      "新闻 12",
      "新闻 13",
      "新闻 14",
      "新闻 15"
    ]

    //生成随机的 4 条数据：
    var data = []
    for(var i=0; i<5; i++) {
      data.push(rawData[Math.floor(Math.random() * rawData.length)])
    }

    //将这个 JSON 数据 data 变成字符串后发给前端：
    res.write(JSON.stringify(data))
  }

  res.end()

}).listen(3000)