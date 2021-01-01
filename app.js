const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="submit"></form></body>');
        res.write('</html>');
        return res.end();  
    }
    if(url === '/message' && method === 'POST')
    {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    //console.log(req.url, req.method, req.headers);
   // process.exit();
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Hello from node.js server!</h1></body>');
   res.write('</html>');
   res.end();
});

server.listen(3000);