const { createServer } = require('http')

const port = process.env.PORT || 3000

function webServer(req, res) {
    res.end(`
        <h1>Hi, Circle CI with Now :) </h1>

        <h3>Pasos que tendra que hacer Circle CI</h3>

        <ol>
            <li>Creara un pipline build</li>
            <li>Creara un pipline para deploy dev</li>
        </ol>

        si aceptamos el PR hara lo siguiente

        <ol>
            <li>Creara un pipline build</li>
            <li>Creara un pipline para deploy production</li>
        </ol>
    `)
}

const server = createServer(webServer)
server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready On http://localhost:${port}`)
})