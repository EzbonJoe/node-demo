const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  if(req.url === '/'){
    res.end('Welcome to Gadzeke home page')
  }else if(req.url === '/about'){
    res.end('Here is our short history')
  }else{
    res.end(`
      <h1>OOOPS!!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back to home page</a>
    `);
  } 
});

server.listen(5000);