import React from "react";
// import { Outlet } from "react-router-dom";
import Header from "./Header";
import Top from "./Top";
import Home from "./Home";
import Slider from "./Slider";
import Cards from "./Cards";
import Offer from "./Offer";
import Footer from "./Footer";
const Layout =()=>{
    return(
    <>
    <Header/>
    <Top />
    <Home/>
    <Slider/>
    <Cards/>
    <Offer/>
    <Footer/>

    </>
    );
};
export default Layout;





