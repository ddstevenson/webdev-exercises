const http = require('http'); 
const url = require('url'); 
const querystring = require('querystring'); 

const port = process.env.PORT || 5000;

// Add your code below
url.querystring

const server = http.createServer((req, res) => {
    
    // Add your code below
    const qs = req.url.split("?")[1];
    var queryData = querystring.parse(qs ? qs : '');
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><table>");
    for(var x in queryData) {
      res.write(`<tr><td>${x}</td><td>${queryData[x]}</td></tr>`);
    }
    res.write("</table></body></html>");
    res.end();
  });
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});