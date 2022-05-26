import React from 'react';
import "./home.css";
import video  from "../images/three.mp4" ;
import influ  from "../images/influ.png"
import { NavLink } from 'react-router-dom';
// import svg from "../images/influencers.svg";

const HomePage = () => {
    return (
        <div>
            <div className="container-fluid my_full_cont">
                <video className='homeVideo' autoPlay loop>
                    <source src={video}  type="video/mp4" />
                </video>
                <div className="container">
                    <div className="auth_nav">
                        <NavLink className="_btn" to="/influencer" >Log In</NavLink>
                        <NavLink className="_btn" to="/influencer" >Sign up</NavLink>
                    </div>
                    <div className="page_nav row">
                        <div className="let_influneso col-md-4">
                            <h1>Let's Influenso</h1>
                        </div>
                        <div className="page_links col-md-8">
                            <NavLink className="page_" to="/home">Home</NavLink>
                            <NavLink className="page_" to="/influencerprofile">Blogs</NavLink>
                            <NavLink className="page_" to="/browse">Influencers</NavLink>
                            <NavLink className="page_" to="/brands">Brands</NavLink>
                            <NavLink className="page_" to="/aboutus">About Us</NavLink>
                            <NavLink className="page_" to="/contactus">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="home_main row">
                        <div className="homeInfo_textarea col-md-6">
                            <h1>Get a Easy Interactions Between <br /> Brands and Influencers </h1>
                            <h5>With <span>Let’s Influenso</span></h5>
                            <div className="btn_brand_influencer">
                                <button className="imbrand" >
                                    I am Brand
                                </button>
                                <button className="iminfluencer">
                                    I am Influencer
                                </button>
                            </div>
                        </div>
                        <div className="homeInfo_imageArea col-md-6">
                            <img src={influ} alt="this"  className='home_img'/>
                            <h1>#LetsInfluenso</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default HomePage;