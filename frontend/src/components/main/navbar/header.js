import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <>
            <div className="container-fluid ful-widht">
                <div className='container'>
                    <div className="header_page_nav row">
                        <div className="header_let_influneso col-md-4">
                            <h1>Let's Influenso</h1>
                        </div>
                        <div className="header_page_links col-md-8">
                            <NavLink className="links_nav" to="/" >Home</NavLink>
                            <NavLink className="links_nav" to="/influencerprofile" >Blogs</NavLink>
                            <NavLink className="links_nav" to="/browse" >Influencers</NavLink>
                            <NavLink className="links_nav" to="/" >Brands</NavLink>
                            <NavLink className="links_nav" to="/aboutus" >About Us</NavLink>
                            <NavLink className="links_nav" to="/contactus" >Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;