import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import app_config from '../../config';
import imageSvg1 from "../images/login.svg"
import Header from '../navbar/header';
import './signup.css';

const InfluencerSignUp = () => {
  const change = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".box");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }



  const url = app_config.backend_url
  const navigate = useNavigate();

  const userForm = {
    brandName: "",
    ownerName: "",
    email: "",
    contact: "",
    websiteLink: "",
    password: ""
  }

  const userSubmit = (formdata) => {
    console.log(formdata);
    window.alert(formdata.brandName + " " + "is registered")

    fetch(url + '/brand/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((data) => {
        console.log(data);

      })

  };

  const loginform = {
    email: '',
    password: '',
  }
  const loginSubmit = (formdata) => {
    console.log(formdata);
    fetch(url + '/brand/authenticate', {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Login Successfully",
        })

        res.json().then(data => {
          console.log(data);
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/influencer/personalprofile')
        })

      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: "Login Failed",
        })
      }
      return res.json()
    })
  }

  return (
    <>
    <Header/>
      <div className="box">
        <div className="forms-box">
          <div className="signin-signup">

            <Formik initialValues={loginform} onSubmit={loginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                // <form className="sign-in-form" onSubmit={handleSubmit}>
                //   <h2 className="title">Log In <span className='title_span'>To Your Acccout</span></h2>
                //   <p className="social-text">Log In Using Social Networks</p>
                //   <div className="social-media">
                //     <a href="/" className="social-icon">
                //       <i className="fab fa-facebook-f"></i>
                //     </a>
                //     <a href="/" className="social-icon">
                //       <i className="fab fa-twitter"></i>
                //     </a>
                //     <a href="/" className="social-icon">
                //       <i className="fab fa-google"></i>
                //     </a>
                //     <a href="/" className="social-icon">
                //       <i className="fab fa-linkedin-in"></i>
                //     </a>
                //   </div>
                //   <div className="input-field">
                //     <i className="fas fa-user"></i>
                //     <input type="text" placeholder="Email" id='email' onChange={handleChange} value={values.email} />
                //   </div>
                //   <div className="input-field">
                //     <i className="fas fa-lock"></i>
                //     <input type="password" placeholder="Password" id='password' onChange={handleChange} value={values.password} />
                //   </div>
                //   <div className="remember">
                //     <input type="checkbox" name="remember" id="remember" />Remember Me
                //   </div>
                //   <input type="submit" value="Login" className="btn solid" />

                // </form>
                <form onSubmit={handleSubmit}>
                  <input className='form-control' id="email" onChange={handleChange}  value={values.email} />
                  <input className='form-control' id="password" onChange={handleChange}  value={values.password} />
                  <button type='submit'>Log In</button>
                </form>
              )}
            </Formik>

            <Formik initialValues={userForm} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form className="sign-up-form" onSubmit={handleSubmit}>
                  <h2 className="title">Sign Up <span className='title_span'>To Your Account </span></h2>
                  <p className="social-text">Or Sign up with social platforms</p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="content_input">
                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Brand Name" id='brandName' onChange={handleChange} value={values.brandName} />
                    </div>
                    <div className="input-field">
                      <i class="fa-solid fa-n"></i>
                      <input type="text" placeholder="Name" id='ownerName' onChange={handleChange} value={values.ownerName} />
                    </div>
                  </div>
                  <div className="content_input">
                    <div className="input-field">
                      <i className="fas fa-envelope"></i>
                      <input type="email" placeholder="Email" id='email' onChange={handleChange} value={values.email} />
                    </div>
                    <div className="input-field">
                      <i class="fa-solid fa-phone"></i>
                      <input type="tel" placeholder="Mobile / Tel" id='contact' onChange={handleChange} value={values.contact} />
                    </div>
                  </div>
                  <div className="content_input">
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="text" placeholder="Website Link" id='websiteLink' onChange={handleChange} value={values.websiteLink} />
                    </div>

                  </div>
                  <div className="content_input">
                    <div className="input-field ">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Password" id='password' onChange={handleChange} value={values.password} />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Re-enter Password" />
                    </div>
                  </div>
                  <input type="submit" className="btn" value="Sign up" />

                </form>
              )}

            </Formik>
          </div>
        </div>

        <div className="panels-box">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" onClick={change} id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src={imageSvg1} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" onClick={change} id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src="{imageSvg2}" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default InfluencerSignUp 
