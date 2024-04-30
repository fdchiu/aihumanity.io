import React, { Component } from "react";
//import myVideo from "../../video/AIHumanityDemo.mov";

function PlayMov() {
        return (
            <div className="flex flex-col items-start justify-center pl-[200px] pr-14 gap-4 py-[200px] md:p-5 bg-black-900_02">
                <video controls autoPlay loop muted>
                    {/*<source src={myVideo} type="video/mp4"></source>*/}
                    <source src='/video/AIHumanityDemo.mov' type="video/mp4"></source>
                </video>
            </div>
        );
    
}

export default PlayMov;
