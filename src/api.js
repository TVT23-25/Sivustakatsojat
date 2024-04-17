import axios from 'axios'

const apiKey = '472624d51a1f4be9ba4953b610d352aa'

export async function searchMovies(query) {
  try {
    const resp = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fi-FI&query=${query}`)
    return resp.data.results
  } catch (error) {
    console.error('Error fetching search results:', error)
    throw error
  }
}

export async function getHarryPotterAndJaneAustenMovies() {
  try {
    const resp = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fi-FI&query=harry potter,jane austen`)
    return resp.data.results
  } catch (error) {
    console.error('Error fetching Harry Potter and Jane Austen movies:', error)
    throw error
  }
}