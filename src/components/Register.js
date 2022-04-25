import React,{useState} from 'react'
import './css/register.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const history = useNavigate()
  const initialFormData = Object.freeze({  
    email: '',
    user_name: '',
    password: ''
   })
   const [formData , updateFormData ] = useState(initialFormData)

   const handleChange = (e) =>{
    updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
    });
    }

    const handleSubmit = (e) =>{
      e.preventDefault()

      axiosInstance.post(`register/`,{
          email: formData.email,
          user_name: formData.user_name,
          password : formData.password
      })
      .then((res) => {
          history('/login');
          console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
      });

    }
      

  return (
    <>
    <div className="app__register">
      <div className="container">
        <div className="row form">
        <div className="col-md-5">
          <div className="card">
            <p className='text-center'><AccountCircleIcon /></p>
            <h3 className='text-center'>SignUp</h3>
            <form>
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                  type="text" 
                  className="form-control input1" 
                  name='user_name'
                  placeholder='username...' 
                  onChange={handleChange}
                  />
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                  type="email" 
                  className="form-control input1" 
                  name='email'
                  placeholder='email...' 
                  onChange={handleChange}
                  />
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                  type="password" 
                  className="form-control input1" 
                  name='password'
                  placeholder='password...' 
                  onChange={handleChange}
                  />
                  <br />
                   Already have an account? <a href="/login">Login</a>
              <button 
                  className='btn8 mt-4'
                  onClick={handleSubmit}
                  >Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Register