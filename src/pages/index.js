import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react'
import Seo from '@/components/Seo'

const API_KEY = 'ed8f5e6c3b01b09d1cf884f7315fc7de'
const BASE_URL = 'https://api.themoviedb.org/3'

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    ;(async () => {
      const { results } = await (
        await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      ).json()
      setMovies(results)
    })()
  }, [])

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  )
}
