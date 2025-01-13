const express = require('express') // require -> commonJS
const movies = require('./movies.json')

const app = express()
app.disable('x-powered-by')

// Todos los recursos que sean MVOIES se identifican con /movies
app.get('/movies', (req, res) => {
  res.json(movies)
})

// :id => segmento dinamico
app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
