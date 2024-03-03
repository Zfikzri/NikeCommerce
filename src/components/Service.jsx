import React from 'react'
import "./Service.css"
import support from "../assets/support.png"
import shoe from "../assets/shoe.png"
import truck from "../assets/truck.png"

 function Service() {
  return (
    <div id="service" className="content-service">
        <h4>Offering</h4>
        <h2>Our Amazing Services</h2>
        <div className="content-box">
            <div className="content-fill">
                <img src={support} alt="" />
                <h3>Excellent Customer Support</h3>
                <p>We offer our clients Excellent Customer services, your satisfaction is our priority.</p>
            </div>
            <div className="content-fill">
                <img src={shoe} alt="" />
                <h3>Latest Shoes</h3>
                <p>We provie our client the the best and latest nike shoes. Always look fresh with nike.</p>
            </div>
            <div className="content-fill">
                <img src={truck} alt="" />
                <h3>Fast Delivery</h3>
                <p>We offer our clients Excellent quality services for many years. with the best and latest shoes on the plant.</p>
            </div>
        </div>
    </div>
  )
}
export default Service;