import { randomUUID } from 'node:crypto'
import { readJSON } from '../utils.js'

const movies = require('../movies.json')

export class MovieModel {
  static getAll ({ genre }) {
    if (genre) {
      return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static async getById ({ id }) {
    const movie = movies.find(movie => movie.id === id)
    return movie
  }

  static async create ({ input }) {
    // en base de datos
    const newMovie = {
      id: randomUUID(), // uuid v4
      ...input
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

    return newMovie
  }

  static async delete ({ id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false
    movies.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input
    }

    return movies[movieIndex]
  }
}
