const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

// Request and respuesta
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})
