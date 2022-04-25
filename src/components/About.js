import React from 'react'
import './css/about.css'
import maid from '../images/seat.jpg'
import clean from '../images/clean.jpg'
import clean2 from '../images/clean2.jpg'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



function About() {
  return (
    <>
     <div className="app__about">
         <img className='img-fluid' src={maid} alt="" />
         <div className="container">
             <div className="row mt-5">
                 <div className="col-md-6">
                     <h2>Our Story</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam, officiis recusandae molestiae obcaecati voluptatum, praesentium repellat vero libero minima molestias in, maiores quibusdam deleniti repellendus amet hic magnam modi id sapiente vitae. Quidem accusantium error voluptas? Porro, iusto cum.</p>
                     <p>A living place for curiosity and collaboration, meeting and meaning. We are the heart of a creative community</p>
                 </div>
                 <div className="col-md-6">
                     <img className='img-fluid' src={clean} alt="" />
                 </div>
             </div>
             <div className="row mt-5">
                 <div className="col-md-6">
                     <img className='img-fluid' src={clean2} alt="" />
                 </div>
                 <div className="col-md-6 mt-3">
                        <CheckCircleIcon />
                        <span>Contact Monitoring</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                        <CheckCircleIcon />
                        <span>3 yrs of extensive research</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                        <CheckCircleIcon />
                 </div>
             </div>
         </div>
     </div>
    </>
  )
}

export default About