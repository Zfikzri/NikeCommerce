import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./App.css"
import About from "./components/About"
import Service from "./components/Service"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
    </>
  )
}

export default App
