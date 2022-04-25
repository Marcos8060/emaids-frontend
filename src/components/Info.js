import React from 'react'
import home from '../images/clean.jpg'
import family from '../images/family.png'
import './css/info.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Info() {
  return (
    <>
     <div className="app__info">
         <div className="container">
             <div className="row top">
                 <div className="col-md-6">
                     <img className='img-fluid' src={home} alt="" />
                 </div>
                 <div className="col-md-6 text-center">
                     <h2 className='text-center underline mb-4'>About Us</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio quae libero quia rerum ea dolores modi quidem debitis iure!</p>
                     <a className='text-decoration-none' href='/about'><span>Learn More</span></a>
                     <a href='/about'><ArrowDownwardIcon /></a>
                 </div>
             </div>
             <div className="row">
                 <div className="col-md-6">
                     <h3 className='mb-5'>Reasons why families choose us..</h3>
                        <CheckCircleIcon />
                        <span>We save you valuable time</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                        <CheckCircleIcon />
                        <span>We save you valuable time</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                        <CheckCircleIcon />
                        <span>We save you valuable time</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                 </div>
                 <div className="col-md-6">
                     <img className='img-fluid' src={family} alt="" />
                 </div>
             </div>
         </div>
     </div>
    </>
  )
}

export default Info