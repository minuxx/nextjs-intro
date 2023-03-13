import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react'
import Seo from '@/components/Seo'

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />

      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie {
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

// 이 이름의 function 은 server쪽에서만 작동한다. 이것을 통해 redirect가 아니여도 API Key도 숨길 수 있다.
// 이 함수는 props라는 키를 가진 object 를 반환하며 props 안에는 원하는 데이터를 아무거나 넣을 수 있다.
// 그 데이터는 컴포넌트의 props 로 받게 된다. ( Custom App 의 pageProps 가 전달하게 된다. )
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3004/api/movies`)
  ).json()

  return {
    props: {
      results,
    },
  }
}
