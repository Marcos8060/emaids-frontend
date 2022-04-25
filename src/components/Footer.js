import React from 'react'
import './css/footer.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Footer() {
  return (
    <>
      <div className="app__footer">
          <div className="container-fluid">
              <div className="row foot">
                  <div className="col-md-4 text-center">
                  <h2>emaids</h2>
                    <small style={{ color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa molestias totam natus magnam?</small>
                  </div>
                  <div className="col-md-4 text-center">
                      <p>@Copyright Allrights Reserved</p>
                  </div>
                  <div className="col-md-4 text-center">
                      <h4>Made with love by</h4>
                      <p>Marcos Ochieng</p>
                      <a href='#'><ArrowUpwardIcon /></a>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer