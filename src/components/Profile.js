import React, { useState, useEffect,useReducer } from "react";
import "./css/profile.css";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import {reducer} from './reducer'
import Modal from "./Modal";


const defaultState = {
  isModalOpen: false,
  modalContent: ''
}

function Profile() {
  const { id } = useParams();
  const initialFormData = Object.freeze({
    profile: "",
    comment: "",
    user: "",
    // pub_date: ""
  });
  // console.log(initialFormData)
  const [profile, setProfile] = useState([]);
  const [postComment, setPostComment] = useState(initialFormData);
  const [state,dispatch] = useReducer(reducer,defaultState);

  const url = `http://127.0.0.1:8000/api/profiles/${id}/`;

  useEffect(() => {
    const getProfile = async () => {
      const result = await axios(url);
      setProfile(result.data);
      // console.log(result.data);
    };
    getProfile();
  }, []);

  const handleChange = (e) => {
    setPostComment({
      ...postComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.post('comments/',{
        profile: id,
        comment: postComment.comment,
        user: postComment.user,
        // pub_date: postComment.pub_date
    })
    .then((res) =>{
        console.log(res)
    })
    .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
      });
    window.location.reload();
    if(postComment.comment){
      dispatch({ type: 'ADD_COMMENT'})
    }
  };

  return (
    <>
      <div className="app__profile">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 text-center mb-4">
              <img className="img-fluid profile__photo" src={profile.image} alt="" />
            </div>
            <div className="col-md-8 bio">
              <h3>About Me</h3>
              <p>{profile.bio}</p>
              <a href={"/edit/" + profile.id}>
                <button className="btn3 m-2">Edit Profile</button>
              </a>
              <hr />
              <div className="row">
                <div className="col-md-12 mt-4 table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contract</th>
                        <th scope="col">Location</th>
                        <th scope="col">Member since</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{profile.full_name}</td>
                        <td>{profile.email}</td>
                        <td>{profile.contract}</td>
                        <td>{profile.location}</td>
                        <td>
                          {moment(profile.date_joined).format("YYYY-MM-DD")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row card">
                <h5 className="text-center">Drop a comment below</h5>
                <div className="col-md-12">
                  {state.isModalOpen && <Modal modalContent={state.modalContent} />}
                  <form onSubmit={handleSubmit} className="d-flex align-items-center mt-4 mb-4">
                    <input
                      type="text"
                      className="form-control comment__input"
                      placeholder="write a comment..."
                      name="comment"
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      className="btn4"
                    >
                      Post
                    </button>
                  </form>
                </div>
                <div className="col-md-12">
                  <div className="col-md-12">
                    {profile.profile_comment?.map((comment) => (
                      <div key={comment.id}>
                        <p className="comment__text">{comment.comment}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="user text-muted">By {comment.user.username}</p>
                          <p className="date text-muted">
                            {/* {comment.pub_date} */}
                          </p>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
