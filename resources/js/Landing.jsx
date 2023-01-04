import React from 'react'
import Books from './components/Books'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'

function Landing() {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Books />
    </div>
  )
}

export default Landing