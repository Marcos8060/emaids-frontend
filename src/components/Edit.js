import React, { useState, useEffect } from "react";
import "./css/edit.css";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
  const history = useNavigate();
  const { id } = useParams();
  const intialFormData = Object.freeze({
    full_name: "",
    email: "",
    age: "",
    location: "",
    experience: "",
    bio: "",
  });

  const [formData, setFormData] = useState(intialFormData);

  useEffect(() => {
    axiosInstance.get(`edit/${id}/`).then((res) => {
      setFormData({
        ...formData,
        ["full_name"]: res.data.full_name,
        ["email"]: res.data.email,
        ["age"]: res.data.age,
        ["location"]: res.data.location,
        ["experience"]: res.data.experience,
        ["bio"]: res.data.bio,
      });
      console.log(res.data);
    });
  }, [setFormData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.put(`edit/${id}/`, {
      full_name: formData.full_name,
      email: formData.email,
      user: 1,
      age: formData.age,
      location: formData.location,
      experience: formData.experience,
      bio: formData.bio,
    });
    history({
      pathname: `/profiles/${id}`,
    });
    window.location.reload();
  };

  return (
    <>
      <div className="app__edit">
        <div className="container">
          <h2 className="text-center mt-4">Edit your Profile</h2>
          <div className="row">
            <div className="col-md-10 editCard">
              <div className="card">
                <form className="editForm">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="fullname" className="form-label">
                        Full Name
                      </label>
                      <input
                        value={formData.full_name}
                        name="full_name"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                      />
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        value={formData.email}
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                      />
                      <label htmlFor="age" className="form-label">
                        Age
                      </label>
                      <input
                        value={formData.age}
                        name="age"
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                      />
                       <label htmlFor="location" className="form-label">
                        Location
                      </label>
                      <input
                        value={formData.location}
                        name="location"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="experience" className="form-label">
                        Experience
                      </label>
                      <input
                        value={formData.experience}
                        name="experience"
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                      />
                      <label htmlFor="Bio" className="form-label">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        id=""
                        cols="30"
                        rows="4"
                        className="form-control"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button onClick={handleSubmit} className="btn-secondary mt-3" type="submit">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
