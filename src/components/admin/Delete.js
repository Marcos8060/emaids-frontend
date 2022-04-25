import React,{useState,useEffect} from 'react'
import axiosInstance from '../../axios'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/delete.css'


function Delete() {
    const history = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) =>{
        e.preventDefault();

        axiosInstance.delete(`admin/delete/${id}`)
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
        .then(function () {
            history({
                pathname: '/admin/profiles',
            });
            window.location.reload();
    });
    }


  return (
    <>
      <div className="app__delete">
          <div className="container">
              <button 
                className="btn btn-danger"
                type='submit'
                onClick={handleSubmit}
                 >
                  Press here to confirm
              </button>
          </div>
      </div>
    </>
  )
}

export default Delete