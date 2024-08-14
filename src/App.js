import './App.css';
import Header from './Component/Header/Index';
import Head from './Edit/Header/Index'
import Footer from './Component/Footer/Index'
import Intro from './Component/Intro/Index';
// import About from './Component/About/Index';
import Login from './Edit/Login/Index'
import Contact from './Component/Contact/Index'
import HomeCard from './Component/Card/Index'
import AddProduct from './Edit/AddProduct/Index';
import Card from './Edit/Card/Index'
import Feedback from './Edit/feedback/Index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/interior-design" element={
          <>
            <Header />
            <Intro />
            <HomeCard/>
           
            <Contact/>
            <Footer/>
          </>
          
        } />
        <Route path="/login" element={
          <>
            <Head />
            <Login />
           <Footer/>
          </>
          
        } />
        <Route path="/home" element={
          <>
            <Head />
           <AddProduct/>
           <Card/>
           <Feedback/>
            <Footer/>
          </>
          
        } />
      </Routes>
    </Router>
  );
}

export default App;
