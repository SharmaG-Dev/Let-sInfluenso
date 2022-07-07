import { TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import app_config from '../../config';
import Header from '../navbar/header';
import './signup.css';

const BrandSignup = () => {

  const navigate = useNavigate();
  const shifter = () => {
    const shift_btn = document.querySelector(".page_shifter");
    const login_form = document.querySelector(".login_form");
    const signup_form = document.querySelector(".signup_form");
    // const gap_h1 = document.querySelector(".shift_h1");
    // const gap_p = document.querySelector(".shift_p");

    {
      shift_btn.addEventListener('click', () => {
        login_form.classList.toggle("login_form_none");
        signup_form.classList.toggle("signup_form_block");
      });
    }
  }

  const url = app_config.backend_url

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
    window.alert(formdata.brandName +" " +"is registered")

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
    email :'',
    password :'',
  }
  const loginSubmit =(formdata) => {
    console.log(formdata);
    fetch(url+'/brand/authenticate',{
      method :"POST",
      body : JSON.stringify(formdata),
      headers :{
        "Content-Type" : "application/json"
      },
    }).then((res) => {
      if (res.status === 200){
        Swal.fire({
          icon :"success",
          title : "success",
          text :"Login Successfully",
      })
      res.json().then(data => {
        sessionStorage.setItem('user', JSON.stringify(data))
        navigate('/influencer/personalprofile')
      })
      } else if (res.status === 400){
        Swal.fire({
          icon: "error",
          title :"error",
          text :"Login Failed",
        })
      }
      return res.json()
    })
  }

  return (
    <div>
      <Header/>
      <div className="container-fluid full_cont row">
        <div className="login_form col-md-9">
          <div className="name">
            <div className="burger">
              <div className="line_one"></div>
              <div className="line_two"></div>
              <div className="line_three"></div>
            </div>
            <h1>Lets Influenso</h1>
          </div>
          <div className="container my-cont">
            <h1>Log In <span>To Your Account</span></h1>
            <p>Login Using Social Networks</p>
            <div className="social_icons">
              <i class="fa-brands fa-google gold_icon"></i>
              <i class="fa-brands fa-instagram grey_icon"></i>
              <i class="fa-brands fa-linkedin-in gold_icon"></i>
              <i class="fa-brands fa-facebook grey_icon"></i>
            </div>
            <div className="or_line">
              <hr className='hr' />
              <h6>or</h6>
              <hr className='hr' />
            </div>
            <Formik initialValues={loginform} onSubmit={loginSubmit}>
              {({ values , handleSubmit ,handleChange}) => (
                <form onSubmit={handleSubmit}>
                <TextField fullWidth margin="dense" label="Email" variant='outlined' name='email' onChange={handleChange} value={values.email} />
                <TextField fullWidth margin="dense" label="Password" type="password" variant='outlined' name='password' onChange={handleChange} value={values.password}/>
                <div className="remember">
                  <input type="checkbox" name="remember_checkbox" id="remember_checkbox" /> Remember Me
                </div>
                <a className='forgot_pswd' href="#">Forgot Your Password ?</a>
                <button type='submit' className='login_btn'>Log In</button>
              </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="gap col-md-3">
          <div className="text-area">
            <h1 className='shift_h1'>New Here ?</h1>
            <p className='shift_p'>Sign Up and Discover a Great <br /> amount of New Opportunities</p>
            <button className='page_shifter' onClick={shifter}>Sign Up</button>
          </div>
        </div>
        <div className="signup_form col-md-9">
          <div className="name">
            <div className="burger">
              <div className="line_one"></div>
              <div className="line_two"></div>
              <div className="line_three"></div>
            </div>
            <h1>Lets Influenso</h1>
          </div>
          <div className="container my-cont">
            <h1>Sign Up <span>To Your Account</span></h1>
            <p>Login Using Social Networks</p>
            <div className="social_icons">
              <i class="fa-brands fa-google gold_icon"></i>
              <i class="fa-brands fa-instagram grey_icon"></i>
              <i class="fa-brands fa-linkedin-in gold_icon"></i>
              <i class="fa-brands fa-facebook grey_icon"></i>
            </div>
            <div className="or_line">
              <hr className='hr' />
              <h6>or</h6>
              <hr className='hr' />
            </div>

            <Formik initialValues={userForm} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <TextField fullWidth margin="dense" label="Brand Name" variant='outlined' id='brandName' onChange={handleChange} value={values.brandName} />
                  <TextField fullWidth margin="dense" label="Name" variant='outlined' id='ownerName' onChange={handleChange} value={values.ownerName} />
                  <TextField fullWidth margin="dense" label="Email" variant='outlined' id='email' onChange={handleChange} value={values.email} />
                  <TextField fullWidth margin="dense" label="Mobile No" variant='outlined' id='contact' onChange={handleChange} value={values.contact} />
                  <TextField fullWidth margin="dense" label="Website Link" variant='outlined' id='websiteLink' onChange={handleChange} value={values.websiteLink} />
                  <TextField fullWidth margin="dense" label="Password" type="password" variant='outlined' id='password' onChange={handleChange} value={values.password} />
                  <TextField fullWidth margin="dense" label="Re-enter password" type="password" variant='outlined' id='login_pswd' />
                  <div className="remember">
                    <input type="checkbox" name="remember_checkbox" id="remember_checkbox" /> Remember Me
                  </div>
                  <a className='forgot_pswd' href="#">Forgot Your Password ?</a>
                  <button type='submit' className='signup_btn'>Sign Up</button>
                </form>
              )}

            </Formik>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandSignup