import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { useState } from 'react'
import Seo from '@/components/Seo'

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
    </div>
  )
}
