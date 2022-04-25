import React, {useState,useEffect} from 'react'
import './css/admin.css'
import axiosInstance from '../axios'
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link'


function Admin() {
    const [profiles,setProfiles] = useState([])
    const [summary,setSummary] = useState({})

    useEffect(() =>{
        axiosInstance.get('/profiles/').then((res) =>{
            setProfiles(res.data)
            // console.log(res.data);
        })
    },[])
    
    useEffect(() =>{
        axiosInstance.get('/summary/').then((res) =>{
            setSummary(res.data)
            console.log(res.data)
        })
    },[])
  return (
    <>
      <div className="app__adminView">
          <div className="container table-responsive">
              <h2 className='text-center mt-4 mb-4'>Welcome to the Admin Dashboard</h2>
              <div className="row">
                  <div className=" card col-md-4">
                      <h3 className='text-center'>{summary.profiles} Profiles created</h3>
                  </div>
              </div>
                <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Remove User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles.map((profile) =>(
                                <tr key={profile.id}>
                                <th scope="row">{profile.id}</th>
                                <td>{profile.full_name}</td>
                                <td>{profile.email}</td>
                                <td>
                                    <Link
                                    color="textPrimary"
                                    href={'/admin/delete/' + profile.id}
                                    >
                                      <DeleteIcon />
                                    </Link>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
              </div>
          </div>
    </>
  )
}

export default Admin