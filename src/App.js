import './App.css';
import Header from './Component/Header/Index';
import Footer from './Component/Footer/Index'
import Intro from './Component/Intro/Index';
import About from './Component/About/Index';
import Login from './Edit/Login/Index'
import Contact from './Component/Contact/Index'
import HomeCard from './Component/Card/Index'
import AddProduct from './Edit/AddProduct/Index';
import Card from './Edit/Card/Index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Intro />
            <HomeCard/>
            <About />
            <Contact/>
            <Footer/>
          </>
          
        } />
        <Route path="/login" element={
          <>
            <Header />
            <Login />
            <About />  <Footer/>
          </>
          
        } />
        <Route path="/home" element={
          <>
            <Header />
           <AddProduct/>
           <Card/>
            <About />  <Footer/>
          </>
          
        } />
      </Routes>
    </Router>
  );
}

export default App;
