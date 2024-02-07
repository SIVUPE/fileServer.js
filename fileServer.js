

const http = require('http');
const fs = require('fs');
const url = require('url');
function serveFile(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const filename = parsedUrl.pathname.substring(1); // Remove leading slash
    const filePath = `./${filename}`;
    fs.readFile('data.txt', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
}
http.createServer((req, res) => {
    if (req.method === 'GET') {
        serveFile(req, res);
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
}).listen(8080);
console.log('Server running at http://localhost:8080/')