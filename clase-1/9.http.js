const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

// Request and respuesta
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
  })
})
