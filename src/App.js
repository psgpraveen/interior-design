import './App.css';
import Header from './Component/Header/Index';
import Head from './Edit/Header/Index';
import Footer from './Component/Footer/Index';
import Intro from './Component/Intro/Index';
import ProtectedRoute from './Edit/Auth/Index';
import Login from './Edit/Login/Index';
import Contact from './Component/Contact/Index';
import HomeCard from './Component/Card/Index';
import Phone from './Component/Phone/Index'
import Err from './Component/Err/Index'
import Why from './Component/WhyChooseUs/Index'
import Card from './Edit/Card/Index';
import Feedback from './Edit/feedback/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Edit/Profile/Index';
import ForgetPassword from './Edit/ForgetPassword/Index';
import HeaderForOther from './Edit/HeaderForOther/Index'

import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <Router><Analytics/>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Intro />
            <div className="relative" style={{ position: 'relative' }}>
              <Phone />
            </div>
            <HomeCard />
            <Why/>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <HeaderForOther />
            <Login />
            <Footer />
          </>
        } />
        <Route path="/home" element={<ProtectedRoute element={() => (
          <>
            <Head />
            <Card />
            <Feedback />
            <Footer />
          </>
        )} />} />
       <Route path="*" element={
          <>
            <Header />
            <Err />
            <Footer />
          </>
       } />
        <Route path="/profile" element={<ProtectedRoute element={() => (
          <>
            <HeaderForOther />
            <Profile />
            <Footer />
          </>
        )} />} />
        <Route path="/forgot" element={
          <>
            <Header />
            <ForgetPassword />
            <Footer />
          </>
        }/>
       
        
      </Routes>
    </Router>
  );
}

export default App;
