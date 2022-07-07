
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
import AboutUs from './components/main/about';
import BrowseInfluencer from './components/searchPage/browseInfluencer';
import AdminProfile from './components/Influencer/userprofile';
import Profile from './components/Influencer/userprofile';
import SignUp from './components/main/signup/signup';
import InfluencerLogin from './components/main/signup/influencerLogin';
import ManageFB from './components/Influencer/manageFB';
import ManageLinkedin from './components/Influencer/manageLinkedin';
import ManageYoutube from './components/Influencer/manageYoutube';
import ManageInsta from './components/Influencer/manageInsta';
import Footer from './components/main/footer';
import ShowProfile from './components/Influencer/showprofile';
import UserShowProfile from './components/Influencer/userShowProfile';
import UserAuthorisor from './userAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="home" />
        {/* <Route element ={<SignUp/>} path="/signup" /> */}
        <Route element={<SignUp />} path="brandlogin" />
        <Route element={<ContactUs />} path="contactus" />
        <Route element={<AboutUs />} path="aboutus" />
        <Route element={<BrowseInfluencer />} path="browse" />
        <Route element={<InfluencerProfile />} path="influencerprofile/:id" />
        <Route element={<InfluencerLogin />} path="influencerlogin" />
        <Route element={<ManageFB />} path="fb" />
        <Route element={<ShowProfile />} path="show" />
        <Route element={<UserShowProfile />} path="usp" />
        <Route element={<ManageLinkedin />} path="linkdin" />
        <Route element={<ManageYoutube />} path="youtube" />
        <Route element={<Footer />} path="footer" />
        <Route element={<ManageInsta />} path="insta" />
        <Route element={<InfluencerLogin />} path="influencerlogin" />
        <Route element={<InfluencerLogin />} path="influencerlogin" />


        <Route element={
          <UserAuthorisor>
            <InfluencerUser />
          </UserAuthorisor>
        } path="influencer">
          <Route element={<Profile />} path="personalprofile" />
          <Route element={<ManageFB />} path="managefb" />
          <Route element={<ManageInsta />} path="manageinsta" />

        </Route>
        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard"></Route>
        </Route>
        <Route element={<BrandUser />} path="branduser"></Route>
        <Route element={<Navigate to="/home" />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
