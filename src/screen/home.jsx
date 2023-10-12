import React from "react";
import Icon1 from "../assets/icon1.png"
import Icon2 from "../assets/icon2.png"
import Icon3 from "../assets/icon3.png"
import Img1 from "../assets/one.png"
import Img2 from "../assets/two.png"
import Img3 from "../assets/three.png"
import Img4 from "../assets/four.png"
import Reviews from "./reviews";
import Services from "./services";
export default class Home extends React.Component {
    render() {
        return (
            <>
                <section id="home">
                    <div className="background  sm:min-w-[80rem] h-[100vh] flex justify-center justify-evenly lg:justify-around items-center">
                        <div className="border-2 flex-shrink-0 w-[80%] sm:w-[30%] flex flex-col bg-white px-10 py-10 rounded-md text-center">
                            <h1 className="font-semibold text-xl ">SYDNEY'S #1 RATED </h1>
                            <h1 className="font-semibold text-xl "> HOUSE CLEANERS.</h1>
                            <input className="border-[1px] mt-10 p-2 " type="text" placeholder="Your Name" />
                            <input className="border-[1px] mt-10 p-2" type="number" placeholder="Zip Code" />
                            <input className="border-[1px] mt-10 p-2" type="email" placeholder="E-mail" />
                            <input className="border-[1px] mt-10 p-2" type="tel" placeholder="Contact" />
                            <button className="mt-10 text-white font-semibold bg-[#FF854D] rounded-md py-2">Book A Clining</button>
                        </div>
                        <div className="w-[40%]  flex-shrink-0 text-white text-start hidden sm:block ">
                            <h1 className=" font-semibold text-4xl">home cleaner in sec.</h1>
                            <h1 className=" font-semibold text-4xl">Book your professional</h1>
                            <div className="flex pt-8">
                                <img className="" src={Icon1} alt="" />
                                <div>
                                    <h1 className="font-bold pt-2 text-sm">1. BOOK A CLEANING</h1>
                                    <p className="text-sm pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, dignissimos quia, debitis totam fugiat mollitia tempore unde repellat deserunt, soluta ut vero hic blanditiis veritatis alias? Dolore, nostrum eius. Iusto.</p>
                                </div>
                            </div>
                            <div className="flex pt-6">
                                <img className="" src={Icon2} alt="" />
                                <div>
                                    <h1 className="font-bold pt-2 text-sm">2. CONFIRM BOOKING</h1>
                                    <p className="text-sm pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ad quasi quaerat obcaecati consectetur assumenda saepe explicabo dolores dolorem laboriosam! Quo odio corrupti qui soluta, harum repellendus aliquid debitis obcaecati.</p>
                                </div>
                            </div>
                            <div className="flex pt-6">
                                <img className="" src={Icon3} alt="" />
                                <div>
                                    <h1 className="font-bold pt-2 text-sm">3. WE'LL CLEAN  IT</h1>
                                    <p className="text-sm pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda veniam ipsum temporibus dolorem ea quaerat at. Earum iusto nostrum quisquam, corporis consequuntur, incidunt velit tenetur unde deleniti, laboriosam quia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FF854D] sm:min-w-[80rem] flex flex-col  sm:flex-row justify-around">
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img4} alt="" />
                    </div>
                </section>
                <section id="reviews">
                    <Reviews />
                </section>
                <section id="servic">
                    <Services />
                </section>
                
            </>
        )
    }
}