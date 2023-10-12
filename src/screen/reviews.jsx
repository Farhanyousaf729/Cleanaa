import React from "react";
import Icon from "../assets/iconfive.png"
export default class Reviews extends React.Component {
    render() {
        return (

            <div className="text-center pt-20 sm:min-w-[80rem] font_family bg-[#F2F2F2]">
                <h1 className=" text-lg ">-REVIEWS-</h1>
                <h1 className=" text-4xl font-semiboldbold pt-6">Read what our past customers said</h1>
                <h1 className=" text-4xl font-semiboldbold ">about our cleaning and services.</h1>
                <div className="flex flex-col justify-evenly px-20 py-20 gap-2 sm:gap-0  sm:flex-row sm:min-w-[80rem]">
                    <div className="bg-white sm:w-[30%] rounded-lg px-4 italic">
                        <div className="flex justify-center">
                            <img src={Icon} alt="" />

                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                        <h1 className="text-[#FF854D] pt-4">-Willsam Dow-</h1>
                        <h1 className="pb-4">Product Designer @Google</h1>
                    </div>
                    <div className="bg-white sm:w-[30%] rounded-lg px-4 italic">
                        <div className="flex justify-center">
                            <img src={Icon} alt="" />
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                        <h1 className="text-[#FF854D] pt-4">-Willsam Dow-</h1>
                        <h1 className="pb-4">Product Designer @Google</h1>
                    </div>
                    <div className="bg-white sm:w-[30%] rounded-lg px-4 italic">
                        <div className="flex justify-center">
                            <img src={Icon} alt="" />
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                        <h1 className="text-[#FF854D] pt-4">-Willsam Dow-</h1>
                        <h1 className="pb-4">Product Designer @Google</h1>
                    </div>
                </div>
                <div className="background_1 w-[100%] h-[25vh] mb-10 text-white text-4xl flex flex-col sm:flex-row justify-center items-center gap-10">
                    <h1 className="">Over 200+ companies are already using Clenaa.</h1>
                    <button className="bg-[#FF854D] px-6 py-4 rounded-lg ">Learn More!</button>
                </div>
            </div>


        )
    }
}