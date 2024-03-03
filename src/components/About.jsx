import React from 'react'
import "./About.css"
import nike2 from "../assets/nike2.png"

 function About() {
  return (
    <div id="about" className="content">
        <h3>About Us</h3>
        <div className="about-content">
            <img src={nike2} alt="" />
            <div className="text-content">
                <h2>Always Look Fresh With Nike</h2>
                <p>Things are better as a Nike Member. Be the first to get exclusive access to the newest styles and innovation, free shipping, birthday reward and more</p>
                <button>Read More</button>
            </div>
        </div>

    </div>
  )
}
export default About;