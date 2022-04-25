import React,{useEffect,useState} from 'react'
import picture from '../images/profile.jpg'
import axiosInstance from '../axios';
import './css/search.css'


function Search() {
    const search = 'search';
    const [appState,setAppState] = useState({
        search : '',
        profiles: [],
    })

    useEffect(() => {
        axiosInstance.get('profiles/' + search + '/' + window.location.search).then((res) =>{
            const allProfiles = res.data;
            setAppState({ profiles: allProfiles})
            console.log(res.data);
        })
    },[setAppState])

  return (
    <>
    <div className="app__search">
        <div className="container-fluid">
        <h3 className='mt-4'>Welcome to your Search results</h3>
            <div className="row mb-5">
                {appState.profiles.map((profile)=>(
                    <div key={profile.id} className="col-md-3 mt-4">
                        <div className="item">
                            <img className='img-fluid profile__img' src={picture} alt="" />
                            <h4 className='text-center'>{profile.full_name}</h4>
                            <p>Email: {profile.email}</p>
                            <p>Age : {profile.age}</p>
                            <p>Location : {profile.location}</p>
                            <p>Experience : {profile.experience}yrs</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Search