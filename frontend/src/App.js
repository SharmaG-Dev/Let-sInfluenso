
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from './components/admin';
import InfluencerUser from './components/Influencer';
import BrandUser from './components/brand';
import Dashboard from './components/admin/dashboard';
// import SignUp from './components/main/signup/signup';
import ContactUs from './components/main/contact';
import HomePage from './components/main/HomePage/home'
import InfluencerProfile from './components/Influencer/profile';
import InfluencerSignUp from './components/main/loginSignup/influencerSignup';
import AboutUs from './components/main/about';
import BrowseInfluencer from './components/searchPage/browseInfluencer';
import AdminProfile from './components/Influencer/userprofile';
import Profile from './components/Influencer/userprofile';
import SignUp from './components/main/signup/signup';
import InfluencerLogin from './components/main/signup/influencerLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="home" />
        {/* <Route element ={<SignUp/>} path="/signup" /> */}
        <Route element={<SignUp />} path="influencer" />
        <Route element={<ContactUs />} path="contactus" />
        <Route element={<AboutUs />} path="aboutus" />
        <Route element={<BrowseInfluencer />} path="browse" />
        <Route element={<InfluencerProfile />} path="influencerprofile" />
        <Route element={<InfluencerLogin />} path="influencerlogin" />


        <Route element={<InfluencerUser />} path="influencer">
          <Route element={<Profile />} path="personalprofile" />

        </Route>
        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard"></Route>
        </Route>
        <Route element={<InfluencerUser />} path="influenceruser"></Route>
        <Route element={<BrandUser />} path="branduser"></Route>
        <Route element={<Navigate to="/home" />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
