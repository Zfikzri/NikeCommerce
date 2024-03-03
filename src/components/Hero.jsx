import React from 'react'
import "./Hero.css"
import nike from "../assets/nike.png"

 function Hero() {
  return (
    <div id="home" className="container">
        <div className="hero-text">
            <h1>Always Dripping</h1>
            <h2>Never Slow Down With Nike</h2>
            <button>View Shop</button>
        </div>
        <img src={nike} alt="" />
    </div>
  )
}
export default Hero;
