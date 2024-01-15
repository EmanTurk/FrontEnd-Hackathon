import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import "../Navbar/navstyle.css";
import LoginBox from '../src/components/loginbox/LoginBox.jsx'; 
import SignUp from '../src/components/loginbox/SignUp.jsx'; 
import HomePage from './components/homePage.jsx'; 
import Footer from './components/footer.jsx';
import ProfilePage from './components/profile.jsx'; 
import SearchPage from "./components/searchPage.jsx";

function App() {
  return (
    <Router>
      <RoutesWithNavbar />
    </Router>
  );
}

function RoutesWithNavbar() {
  const location = useLocation();
  const showNavbar = !['/', '/signup'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginBox />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} /> 
      </Routes>
    </>
  );
}

export default App;
