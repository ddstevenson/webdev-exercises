const http = require('http'); 
const port = process.env.PORT || 5000;
var cookie = require('cookie');

const server = http.createServer((req, res) => {
  var cookies = cookie.parse(req.headers.cookie || '');

  // http://localhost:5000/ should return a status code 200 with a 'welcome' message
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to this application!</h1>");
  }
  // http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code
  else if (req.url === "/redirect") {
    res.writeHead(302, { "Location": "/redirected" });
  }
  // http://localhost:5000/cache should return 'this resource was cached' in plain text and set the cache max age to a day
  else if (req.url === "/cache") {
    res.writeHead(200, { "Content-Type": "text/plain", 'Cache-Control':'max-age=86400' });
    res.write("this resource was cached");
  }
  // http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie
  else if (req.url === "/cookie") {
    res.writeHead(200, { "Content-Type": "text/plain", 'Set-Cookie':'hello=world' });
    res.write("cookies. . . yummm");
  }
  // http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie
  else if (req.url === "/check-cookies") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    if(cookies.hello){
      res.write("yes");
    } else {
      res.write("no");
    }
  }
  // for other routes, this exercise should return a status code 404 with '404 - page not found' in plain text
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 - page not found");
  }

  res.end();
});
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
  