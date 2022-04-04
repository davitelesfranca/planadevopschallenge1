const http = require("http");
const fs = require("fs");

//In this const, is built the desired output for the challenge
const getJSONData = (date,remoteIpAdrres)  => ({
  "timestamp": date.toUTCString(),
  "hostname": require('os').hostname(),
  "engine": require('os').type() + " running NodeJS " + process.version,
  "visitor ip": remoteIpAdrres
});

const requestHandler = (req, res) => {
  if (req.url === "/") { 
    //Here we can have the visitor IP
    let remoteIpAdrres = req.socket.remoteAddress.slice(7);
    let timestamp = getJSONData(new Date(), remoteIpAdrres);
    
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(timestamp));
        
  } else {
    fs.readFile("views/404.html", (err, html) => {
      if (err) throw err;

      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(html);
    });
  }
};

const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 8080, err => {
  if (err) throw err;

  console.log(`Server running on PORT ${server.address().port}`);
});
