
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './components/admin';
import InfluencerUser from './components/Influencer';
import BrandUser from './components/brand';
import Dashboard from './components/admin/dashboard';
import SignUp from './components/main/signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element ={<SignUp/>} path="/" />
      <Route element ={<Admin/>} path="admin">
        <Route element={<Dashboard/>} path="dashboard"></Route>
      </Route>
      <Route element ={<InfluencerUser/>} path="influenceruser"></Route>
      <Route element ={<BrandUser/>} path="branduser"></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
