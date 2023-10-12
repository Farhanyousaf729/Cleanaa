import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import Img from "../assets/0d411cc8-logo-1.png"
export default class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className=" sticky top-0 bg-white flex items-center justify-between py-6 px-6 sm:min-w-[80rem] border-[1px]">
                    <img src={Img} alt="" />
                    <ul className=" gap-10 hidden sm:flex font-semibold text-sm items-center font_family">
                        <Link to="home" smooth={true} duration={500}>
                            <li>HOME</li></Link>
                        <Link to="reviews" smooth={true} duration={500}>
                            <li>REVIEWS</li></Link>
                        <Link to="servic" smooth={true} duration={500}>
                            <li>SERVICES </li></Link>
                        <Link to="/faq">
                            <li>FAQ</li></Link>
                        <Link to="/cont">
                            <li>CONTACT</li></Link>
                            <button className="bg-[#FF854D] text-white font-bold px-8 py-2 rounded-md">sign up</button>
                    </ul>
                </nav>
            </>
        )
    }
}