import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ManageFB from './manageFB'
import ManageInsta from './manageInsta'
import ManageLinkedin from './manageLinkedin'
import ManageYoutube from './manageYoutube'

const ProfileFeeds = () => {
    return (
        <div>
            <div className="row">
                <div className="posts_list col-md-8">
                    <div className="blogs mt-4">
                        <div className="blog card">
                            <div className="blog_image_name card-header">
                                <img src="https://qph.fs.quoracdn.net/main-qimg-1110b49547d746fd563184c6037f3463-lq" className="post_image" alt="Image" />
                                <span>
                                    <h4>Mr Thor</h4>
                                    <h6>Food Blogger</h6>
                                </span>
                                <h5>10 Minutes ago</h5>
                            </div>
                            <div className="image_blog card-body"></div>

                            <div className="like_share_comm card-footer">
                                <span >
                                    <i className="fa-regular fa-heart"></i>
                                    <h5>123</h5>
                                </span>
                                <span>
                                    <i className="fa-regular fa-comment"></i>
                                    <h5>23</h5>
                                </span>
                                <span>
                                    <i className="fa-solid fa-share"></i>
                                    <h5>2</h5>
                                </span>
                            </div>
                            <div className="blog_textarea">
                                Last I worked for the Marvel Team and promoted this Movie .........
                            </div>
                        </div>
                        <div className="blog card mt-4 mb-5">
                            <div className="blog_image_name card-header">
                                <img src="https://qph.fs.quoracdn.net/main-qimg-1110b49547d746fd563184c6037f3463-lq" className="post_image" alt="Image" />
                                <span>
                                    <h4>Mr Thor</h4>
                                    <h6>Food Blogger</h6>
                                </span>
                                <h5>10 Minutes ago</h5>
                            </div>
                            <div className="image_blog card-body">

                            </div>
                            <div className="like_share_comm card-footer">
                                <span >
                                    <i className="fa-regular fa-heart"></i>
                                    <h5>123</h5>
                                </span>
                                <span>
                                    <i className="fa-regular fa-comment"></i>
                                    <h5>23</h5>
                                </span>
                                <span>
                                    <i className="fa-solid fa-share"></i>
                                    <h5>2</h5>
                                </span>
                            </div>
                            <div className="blog_textarea ">
                                Last I worked for the Marvel Team and promoted this Movie .........
                            </div>
                        </div>
                        <div className="blog card mt-4 mb-5">
                            <div className="blog_image_name card-header">
                                <img src="https://qph.fs.quoracdn.net/main-qimg-1110b49547d746fd563184c6037f3463-lq" className="post_image" alt="Image" />
                                <span>
                                    <h4>Mr Thor</h4>
                                    <h6>Food Blogger</h6>
                                </span>
                                <h5>10 Minutes ago</h5>
                            </div>
                            <div className="image_blog card-body">

                            </div>
                            <div className="like_share_comm card-footer">
                                <span >
                                    <i className="fa-regular fa-heart"></i>
                                    <h5>123</h5>
                                </span>
                                <span>
                                    <i className="fa-regular fa-comment"></i>
                                    <h5>23</h5>
                                </span>
                                <span>
                                    <i className="fa-solid fa-share"></i>
                                    <h5>2</h5>
                                </span>
                            </div>
                            <div className="blog_textarea ">
                                Last I worked for the Marvel Team and promoted this Movie .........
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Manage Youtube</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ManageYoutube />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Manage Linkdin</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ManageLinkedin />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Manage Instagram</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ManageInsta />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Manage Facebook</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ManageFB />
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default ProfileFeeds