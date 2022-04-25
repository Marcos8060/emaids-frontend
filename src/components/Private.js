import React, {useState, useEffect} from 'react'
import axiosInstance from '../axios'


function Private() {
    const [privateProfile,setPrivateProfile] = useState([])

    useEffect(() => {
        axiosInstance.get('/profiles/').then((res) =>{
            setPrivateProfile(res.data)
            console.log(res.data);
        })
    },[])
  return (
    <>
      <div className="app__private">
          
      </div>
    </>
  )
}

export default Private