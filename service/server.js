const http = require('http')
const host = '0.0.0.0'
const port = 8083

const requestListener = (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200);
    let content = process.env.CONTENT
    res.end(`<html><body><h1>${content}</h1></body></html>`);
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})