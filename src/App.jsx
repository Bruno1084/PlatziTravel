import React from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Recommentations } from "./components/Recommendations"
import { Trending } from "./components/Trending"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"

function App() {


  return (
    <>
      <Header />
      <Hero />
      <Recommentations />
      <Trending />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
