let http = require('http');

const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-type': 'text/plain'});
    // console.log(req);

    if (req.url === '/') {
        res.end('Welcome to our home');
    }

    if (req.url === '/about') {
        res.end('Here is our short history');
    }

    res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`);

    // res.write('Welcome to our home page');
    // res.end('\nHello World');
});

server.listen(3000);
// server.listen(3000, () => {
//     console.log('server running on 3000');
// });