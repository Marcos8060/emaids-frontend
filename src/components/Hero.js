import React from 'react'
import './css/hero.css'
import hero from '../images/hero.png'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <>
      <div className="app__hero">
          <div className="container">
              <div className="row hero__content">
                <div className="col-md-7">
                    <div className="background">
                      <img className='img-fluid' src={hero} alt="" />
                    </div>
                </div>
                <div className="col-md-5">
                    <h2>Hire some of  the most professional house maids within Nairobi County.</h2>
                    <Link to='/maids'><button className='btn1 mt-4 mb-3'>Available Maids</button></Link>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Hero