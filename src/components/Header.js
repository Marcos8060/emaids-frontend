import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './css/header.css'


function Header() {
  return (
    <>
     <div className="header container-fluid">
       <div className='d-flex'>
         <PhoneIcon />
         <p className='m-2'>+24 702 834 902</p>
       </div>
       <div className='d-flex'>
        <EmailIcon />
         <p className='m-2'>marcosgav80@gmail.com</p>
       </div>
     </div>
    </>
  )
}

export default Header