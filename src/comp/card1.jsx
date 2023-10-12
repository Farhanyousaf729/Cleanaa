import React from "react";
import { ImCheckboxChecked } from "react-icons/im"

export default class Card1 extends React.Component{
    render(){
        return(
            <>
            <div className="">
                    <h1 className="font-semibold text-xl py-4">The Awesome Bedroom</h1>
                    <div className="flex py-4 gap-2 items-center"> <ImCheckboxChecked /><h1>Dust and wipe all reachable surfaces</h1></div>
                    <div className="flex py-4 gap-2 items-center"><ImCheckboxChecked /><h1>Wipe mirrors and glass fixtures</h1></div>
                    <div className="flex py-4 gap-2 items-center"> <ImCheckboxChecked /><h1>Wipe door handles and light switch</h1></div>
                    <div className="flex py-4 gap-2 items-center"> <ImCheckboxChecked /><h1>Vacuum and mop all floors</h1></div>
                    <div className="flex py-4 gap-2 items-center"> <ImCheckboxChecked /><h1>Vacuum and mop all floors</h1></div>
                    <button className="bg-[#FF854D] text-white font-semibold rounded-md py-2 px-6 ">Learn More</button>
                </div>
            </>
        )
    }
}