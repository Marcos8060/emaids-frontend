import React,{useEffect,useState} from 'react'
import axiosInstance from '../axios'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const history = useNavigate();

  useEffect(() => {
    const response = axiosInstance.post('logout/blacklist/', {
        refresh_token : localStorage.getItem('refresh_token'),
    });
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      axiosInstance.defaults.headers['Authorization'] = null;
      history('/login')
   },[])
  return (
    <></>
  )
}

export default Logout