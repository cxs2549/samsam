import React from 'react'
import Header from '../components/homepage/Header'
import Hero from '../components/homepage/Hero'
import Services from '../components/homepage/Services'
import Footer from '../components/common/Footer'
import About from '../components/homepage/About'

const HomePage = () => {
  return (
    <div className='antialiased'>
      <div className="max-w-5xl mx-auto h-screen">
        <Header />
        <Hero />
        {/* <Services /> */}
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage