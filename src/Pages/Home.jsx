import React from 'react'
import LoaderHome from '../Components/LoaderHome/LoaderHome'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Work from '../Components/Work/Work'
import Service from '../Components/Service/Service'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <LoaderHome />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Service />
      <Footer />
    </div>
  )
}

export default Home