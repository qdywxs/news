var http = require("http")
var fs = require("fs")

http.createServer(function(req, res) {
  
  if(req.url === "/index.html") {
    res.setHeader("Content-Type", "text/html; charset = utf-8")
    var html = fs.readFileSync("public/index.html", "utf-8")
    res.write(html)
  }else if(req.url = "/getNews") {
    res.setHeader("Content-Type", "application/json; charset = utf-8")

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

    var data = []
    for(var i=0; i<5; i++) {
      data.push(rawData[Math.floor(Math.random() * rawData.length)])
    }

    res.write(JSON.stringify(data))
  }

  res.end()

}).listen(3000)