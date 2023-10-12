import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./comp/navbar";
import Home from "./screen/home";
import Reviews from "./screen/reviews";
import Services from "./screen/services";
import Faq from "./screen/faq";
import Contact from "./screen/contact";
export default class App extends React.Component {
  render() {
    return (

      <div className="max-w-[2000px]  mx-auto">
        <Nav />
        <Home/>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          {/* <Route path="/Reviews" element={<Reviews />} /> */}
          {/* <Route path="/ser" element={<Services />} /> */}
          {/* <Route path="/faq" element={<Faq />} /> */}
          {/* <Route path="/cont" element={<Contact />} /> */}
        </Routes>
      </div>

    )
  }
} 