const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()
app.disable('x-powered-by')

// middleware
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // Solo llegan request que son POST  y que tienen el header Content-Type: application/json

  let body = ''
  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la información en el req.body
    req.body = data
    next()
  })
})

const PORT = process.env.PORT ?? 1234

// Cuando la app reciba esta ruta, ejecuta esta función
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // req.body deberiamos guardar en bbdd
  res.status(201).json(req.body)
})

// Tratar el 404, debe ser la ultima que va a llegar
// .use = *
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(1234, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
