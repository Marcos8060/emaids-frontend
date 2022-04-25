import picture from "../images/profile.jpg";
import "./css/maids.css";
import axios from "axios";
import axiosInstance from "../axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const url = "http://127.0.0.1:8000/api/profiles/";
function Maids() {

  let history = useNavigate();

  const initialFormData = Object.freeze({
    full_name: "",
    user: "",
    email: "",
    age: "",
    location: "",
    experience: "",
    bio: "",
    image: "",
  });
  const [data, setData] = useState({ search: "" });
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [errors,setErrors] = useState({
    image: "",
    full_name: "",
    user: "",
    email: "",
    age: "",
    location: "",
    experience: "",
    bio: "",
  })


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await axios(url);
      setProfiles(result.data);
      // console.log(result.data);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // profile image upload function
  const handleImageChange = (e) => {
    let newData = { ...formData };
    newData["image"] = e.target.files[0];
    setFormData(newData);
};


  const onSubmit = (e) => {
    e.preventDefault();

      let form_data = new FormData();
      if (formData.image)
          form_data.append("image", formData.image, formData.image.name);
      form_data.append("full_name", formData.full_name);
      form_data.append("user", formData.user);
      form_data.append("email", formData.email);
      form_data.append("age", formData.age);
      form_data.append("location", formData.location);
      form_data.append("experience", formData.experience);
      form_data.append("bio", formData.bio);

    axiosInstance.post(`profiles/`,form_data,{
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      history("/maids");
      console.log(response);
    })
    .catch((err) => {
      console.log(err.response.status);
      console.log(err.response.data);
    });
    handleClose();
    if(!formData.full_name || !formData.email || !formData.age || !formData.location || !formData.experience || !formData.bio){
      alert('Please fill in all the fields!')
    }else{
    }
  };

  // search function
  const goSearch = (e) => {
    history({
      pathname: "/search/",
      search: "?search=" + data.search,
    });
    window.location.reload();
  };

  return (
    <>
      <div className="app__maids">
        <div className="container-fluid">
          <div className="d-flex mb-4">
            <SearchBar
              style={{
                margin: "0 auto",
                maxWidth: 400,
                borderRadius: 30,
                boxShadow: "0px 1px 8px 1px lightgray",
              }}
              placeholder="Search by location..."
              value={data.search}
              onChange={(newValue) => setData({ search: newValue })}
              onRequestSearch={() => goSearch(data.search)}
            />
            <button onClick={handleShow} className="btn1">
              Create Profile
            </button>
          </div>
          <div className="row">
            {profiles.map((profile) => (
              <div className="col-md-3 text-center" key={profile.id}>
                <div className="item">
                    <img className="profile__img" src={profile.image} alt="" />
                    <h4 className="text-center">{profile.full_name}</h4>
                    <p>Age : {profile.age}</p>
                    <p>Location : {profile.location}</p>
                    <p>Experience : {profile.experience}yrs</p>
                    <a href={"profiles/" + profile.id}>
                      <button className="btn2">View Profile</button>
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="profile__form">
            <label htmlFor="full name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              className="form-control"
              placeholder="full name..."
              onChange={handleChange}
            />

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email..."
              onChange={handleChange}
            />

            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              name="age"
              className="form-control"
              placeholder="age..."
              onChange={handleChange}
            />

            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="location..."
              onChange={handleChange}
            />
            <label htmlFor="experience" className="form-label">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              className="form-control"
              placeholder="experience..."
              onChange={handleChange}
            />

            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <textarea
              className="form-control"
              onChange={handleChange}
              name="bio"
              id=""
              cols="30"
              rows="4"
            ></textarea>

            <label htmlFor="contract" className="form-label">
              Contract
            </label>
            <select
              name="contract"
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option defaultValue>--select contract--</option>
              <option value="1">Full-time</option>
              <option value="2">Part-time</option>
            </select>
            <label htmlFor="location" className="form-label">
              Profile picture
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              name="image"
              className="form-control"
              placeholder="profile image..."
              onChange={(e) => {handleImageChange(e)}}
            />
            <button
              type="submit"
              onClick={onSubmit}
              className="btn-secondary mt-3"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Maids;
