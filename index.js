const { createServer } = require('http')

const port = process.env.PORT || 3000

function webServer(req, res) {
    res.end('<h1>Hello Working</h1>')
}

const server = createServer(webServer)
server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready On http://localhost:${port}`)
})