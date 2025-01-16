import express, { json } from 'express'
import { randomUUID } from 'node:crypto'
import cors from 'cors'

import { validateMovie, validatePartialMovie } from './schemas/movies.js'

// Primera forma: Como leet un json en ESModules
// Al usar parse (proceso mas lento)
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// Segunda Forma: Como leer un json en ESModules recomendado por ahora
// Crear un method required para identificar el json
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const movies = require('./movies.json')

const app = express()
app.use(json())
app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:8080',
      'http://localhost:1234',
      'https://movies.com',
      'https://midu.dev'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))
app.disable('x-powered-by')

// Todos los recursos que sean MOVIES se identifican con /movies
app.get('/movies', todo)

// :id => segmento dinamico
app.get('/movies/:id', todo)

// POST
app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: result.error.message })
  }

  // en base de datos
  const newMovie = {
    id: randomUUID(), // uuid v4
    ...result.data
    /* // quitar si se hacen las validaciones correctamente, siendo asi el uso de ...result.body
    title,
    genre,
    director,
    year,
    duration,
    rate: rate ?? 0,
    poster */
  }

  // Esto no seria REST, ya que se estan guardando
  // el estado de la app en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie) // actualizar la caché del cliente
})

// Delete
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Movie deleted' })
})

// PATCH
app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) return res.status(404).json({ message: 'Movie not found' })

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
})

// PORT
const PORT = process.env.PORT ?? 1234

// LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
