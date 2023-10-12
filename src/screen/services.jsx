import React from "react";
import Img1 from "../assets/img1.jpg"
import Img2 from "../assets/img2.jpg"
import Img3 from "../assets/img3.jpg"
import Img4 from "../assets/img4.jpg"
import Card from "../comp/card";
import Card1 from "../comp/card1";
export default class Services extends React.Component {
    render() {
        return (

            <div className="font_family sm:min-w-[80rem] py-20  ">
                <h1 className="text-center ">-WHAT WE DO-</h1>
                <h1 className="text-center font-base text-3xl py-6">Check out some of our professional
                    services! </h1>
                    <div className=" flex flex-col flex-col-reverse justify-center sm:flex-row justify-around py-10 items-center"><Card1/><Card data={{img:Img1}}/></div>
                    <div className="flex flex-col sm:flex-row justify-around py-10 justify-center items-center"><Card data={{img:Img2}}/><Card1/></div>
                    <div className="flex flex-col flex-col-reverse justify-center sm:flex-row justify-around py-10 items-center"><Card1/><Card data={{img:Img3}}/></div>
                    <div className="flex flex-col sm:flex-row justify-around justify-around py-10 items-center"><Card data={{img:Img4}}/><Card1/></div>        
            </div>


        )
    }
}