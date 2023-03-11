import React from "react"
import Header from "../components/common/header/Header"
import Hero from "../components/homepage/Hero"
import Services from "../components/homepage/Services"
import Footer from "../components/common/Footer"
import About from "../components/homepage/About"

const HomePage = () => {
  return (
    <div className="antialiased  mx-auto h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default HomePage
