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
import Why from './Component/WhyChooseUs/Index'
import Card from './Edit/Card/Index';
import Feedback from './Edit/feedback/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/interior-design" element={
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
            <Head />
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
      </Routes>
    </Router>
  );
}

export default App;
