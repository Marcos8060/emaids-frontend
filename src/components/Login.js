import React,{useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './css/login.css'
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const history = useNavigate();
  const initialFormData = Object.freeze({
    username : '',
    password : '',
   })

  const [formData,updateFormData] = useState(initialFormData)

    const handleChange = (e) =>{
      updateFormData({
        ...formData,
        [e.target.name] : e.target.value.trim(),
      })
      }

    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(formData);
  
      axiosInstance.post('token/',{
        username : formData.username,
        password : formData.password
      })
      .then((res) =>{
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] = 
        'JWT ' + localStorage.getItem('access_token')
        history('/')
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
      });
      }

  return (
    <>
      <div className="app__login">
        <div className="container">
          <div className="row form">
          <div className="col-md-5">
            <div className="card">
              <p className='text-center'><AccountCircleIcon /></p>
              <h3 className='text-center'>Login</h3>
              <form>
                <label htmlFor="email" className="form-label">Username</label>
                <input 
                   name='username'
                   type="text" 
                   className="form-control input1" 
                   placeholder='username...' 
                   onChange={handleChange}
                   />
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                   name='password'
                   type="password" 
                   className="form-control input1" 
                   placeholder='password...' 
                   onChange={handleChange}
                   />
                   <br />
                   Dont have an account? <a href="/register">Register</a>
                <button 
                   className='btn8 mt-4'
                   onClick={handleSubmit}
                   >Login</button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login