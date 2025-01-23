import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'

// Primera forma: Como leet un json en ESModules
// Al usar parse (proceso mas lento)
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// Segunda Forma: Como leer un json en ESModules recomendado por ahora
// Crear un method required para identificar el json

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
