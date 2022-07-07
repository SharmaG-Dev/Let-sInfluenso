import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './header.css';

const Header = () => {

    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem('user');
        navigate('/influencerlogin');
    }

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const showLogout = () => {
        if(currentUser!==null){
            return <button className='btn btn-danger' onClick={logout}>Logout</button>
        }
    }
    return (
        <>
            <div className="container-fluid ful-widht">
                <div className='container'>
                    <div className="header_page_nav row">
                        <div className="header_let_influneso col-md-4">
                            <h1>Let's Influenso</h1>
                        </div>
                        <div className="header_page_links col-md-8">
                            <NavLink className="links_nav" to="/home" >Home</NavLink>
                            <NavLink className="links_nav" to="/influencer/managefb" >Facebook Profile</NavLink>
                            <NavLink className="links_nav" to="/influencer/manageinsta" >Instagram Profile</NavLink>
                            <NavLink className="links_nav" to={"/influencerprofile/"+currentUser._id} >View Public Page</NavLink>
                            <NavLink className="links_nav" to="/browse" >Influencers</NavLink>
                            <NavLink className="links_nav" to="/home" >Brands</NavLink>
                            <NavLink className="links_nav" to="/aboutus" >About Us</NavLink>
                            <NavLink className="links_nav" to="/contactus" >Contact Us</NavLink>
                            {showLogout()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;