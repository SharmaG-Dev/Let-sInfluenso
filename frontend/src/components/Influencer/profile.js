// import { Tab, Tabs } from '@mui/material'
// import {Phone, PersonPin, Favorite} from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../config';
import Header from '../main/navbar/header'
import BasicTabs from './tabs';

const InfluencerProfile = () => {

  const { id } = useParams();
  const url = app_config.backend_url;
  const [infData, setInfData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + '/influencer/getbyid/' + id)
      .then(res => {
        if (res.status === 200) {
          res.json().then(data => {
            console.log(data);
            setInfData(data);
            setLoading(false);
          })
        }
      })
  }

  useEffect(() => {
    fetchData()
  
  }, [])
  

  const viewFacebook = () => {
    if (!loading) {
      return <div>
        <img className='profile_image' src={infData.facebook.avatar} />
      </div>
    }
  }


  return (
    <>
      <Header />
      <div className="container-fluid cover_img"></div>
      <div className="container-fluid row">
        <div
          className="profile-sec col-md-3 d-flex flex-column align-center justify-content-center align-items-center"
        >
          
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0DovSk8W0X_0oxFu5IItjVK_KyXamUqjbw&usqp=CAU"
            alt="profile_image"
            className="profile_image"
          /> */}
          {viewFacebook()}
          <button className="btn btn-light follow_btn mt-4 w-50">
            <i className="fa-solid fa-user-plus"></i>Follow
          </button>
          <div className="follow-stats mt-5 mb-4">
            <span
            ><h5>FOLLOWERS</h5>
              <h1>352</h1></span
            >
            <span
            ><h5>FOLLOWINGS</h5>
              <h1>172</h1></span
            >
          </div>
          <span className="performance">
            <h5>PERFORMANCE</h5>
            <h2>56 <span>and 35 reviews</span></h2>
          </span>
          <span className="gallary_text mt-5 mb-2">
            <i className="fa-solid fa-camera-retro"></i>
            <h6>GALLERY</h6>
          </span>
          <span className="gallary">
            <span className="gallary_images">
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
              <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2021/04/instagram-reels-engagement-regram-ugc-400.png" alt="images" className="gallary_reels" />
            </span>
          </span>
        </div>
        <div className="col-md-9">
          <div className="profile_name row mt-5 ">
            <div className="profile_ col-md-9">
              <h1>Mario Mendez</h1>
              <h6>
                Food Blogger
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </h6>
            </div>
            <div className="button_pro col-md-3">
              <button className="btn btn-light"><i className="fa-solid fa-comment"></i></button>
              <button className="btn btn-primary">Request</button>
            </div>
          </div>
          {/* <div className="posta_sec row">
            <div className="tabs_profile col-md-8 row mt-5" >
              <span className="info col-md-3 ">
                <i className="fa-solid fa-circle-info"></i>
                Info
              </span>
              <span className="feed col-md-3 active">
                <i className="fa-solid fa-blog "></i>
                Feed
              </span>
              <span className="works col-md-3">
                <i className="fa-solid fa-briefcase"></i>
                Videos
              </span>
              <span className="edit_profile col-md-3">
                <i className="fa-solid fa-pen-to-square"></i>
                Edit Profile
              </span>

            </div>
          </div> */}
          <BasicTabs />
          {/* <div className="post_icons mt-4 ">
            <div className="add_post mx-4">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="col-md-4"></div>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default InfluencerProfile