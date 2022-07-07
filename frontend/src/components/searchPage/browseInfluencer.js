import React, { useEffect } from 'react'
import Header from '../main/navbar/header';
import './browseinfluncer.css';
import { useState } from 'react';
import app_config from '../config';
import { useNavigate, useParams } from 'react-router-dom';
import { Profile } from 'react-facebook';

const BrowseInfluencer = () => {

    const { id } = useParams();
    const url = app_config.backend_url;

    const [Profiles, setProfiles] = useState([])


    const navigate = useNavigate();


    const fetchData = () => {
        fetch(url + '/influencer/getall')
            .then(res => {
                if (res.status === 200) {
                    res.json().then(data => {
                        console.log(data)
                        setProfiles(data)
                    })
                }
            })
    }

    useEffect(() => {
        fetchData();

    }, [])

    const toProfile = () =>{
        navigate("/show")
    }



    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <div className="browse_searchBar">
                        <input type="text" name="browse_search" id="browse_search" placeholder='Search The Influencer' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="content_browsed">
                        <div className="container">
                            <div className="row">
                                {Profiles.map((profile) => (
                                    <div className="col-md-3 mt-5" key={profile.id}>
                                        <div onClick={toProfile} className="card card-01 height-fix">
                                            <img className="card-img-top" src={url+'/uploads/'+profile.avatar} alt="Card image cap" />
                                            <div className="card-img-overlay">
                                                <h4 className="card-title"><strong>{profile.name}</strong></h4>
                                                <p className="card-text">{profile.email}</p>
                                                <p className="card-text"><a href="/" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="/"></a></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BrowseInfluencer