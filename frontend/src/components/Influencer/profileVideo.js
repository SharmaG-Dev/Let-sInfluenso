import React from 'react'
import "./profile.css";

const ProfileVideo = () => {

    


    return (
        <div>
            <div className="info mt-4">
                <div className="content">

                    <div className="section-header">
                        <h1>Video Gallery</h1>
                    </div>

                    <div className="video-gallery">

                        <div className="gallery-item ">
                            <img src="https://assets.codepen.io/156905/rainier.jpg" alt="Mount Rainier" />
                            <div className="gallery-item-caption">
                              
                                    <h2>Mount Rainier</h2>
                                    <p>14410 feet of adventure</p>
                                   
                                <a className="vimeo-popup" href="https://vimeo.com/179049611"></a>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src="https://assets.codepen.io/156905/olympicnationalpark.jpg" alt="Olympic National Park" />
                            <div className="gallery-item-caption">
                                
                                    <h2>Olympic National Park</h2>
                                    <p>Mountains, rain forests, wild coastlines</p>
                                   
                                <a className="vimeo-popup" href="https://vimeo.com/108785446"></a>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src="https://assets.codepen.io/156905/northcascadespark.jpg" className="north-cascades-img" alt="North Cascades National Park" />
                            <div className="gallery-item-caption">
                              
                                    <h2>North Cascades</h2>
                                    <p>The mountains are calling</p>
                                    
                                <a className="vimeo-popup" href="https://vimeo.com/3653567"></a>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src="https://assets.codepen.io/156905/mountsthelens.jpg" alt="Mount St Helens" />
                            <div className="gallery-item-caption">
                               
                                    <h2>Mount St. Helens</h2>
                                    <p>The one and only</p>
                                <a className="vimeo-popup" href="https://vimeo.com/171540296"></a>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileVideo;