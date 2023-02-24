import React from 'react'
import Header from '../components/homepage/Header'
import Hero from '../components/homepage/Hero'
import Services from '../components/homepage/Services'
import Footer from '../components/common/Footer'

const HomePage = () => {
  return (
    <div className='antialiased '>
      <div className="max-w-sm mx-auto">
        <Header />
        <Hero />
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage