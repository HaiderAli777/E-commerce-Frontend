import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/navbar";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./Component/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import { Routes, Route,Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar> 
      <Routes>
     

  <Route path="/signin" element={<SignIn></SignIn>}></Route>
  <Route path="/signup" element={<SignUp></SignUp>}></Route>
  <Route path="/about" element={<AboutUs></AboutUs>}></Route>
  <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
  <Route path="/home" element={<Home></Home>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
