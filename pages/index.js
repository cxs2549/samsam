import React from 'react'
import Header from '../components/homepage/Header'
import Hero from '../components/homepage/Hero'

const HomePage = () => {
  return (
    <div className='antialiased '>
      <div className="max-w-sm mx-auto">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default HomePage