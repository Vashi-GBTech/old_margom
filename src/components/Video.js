import React from "react";

export default function Video(props){
 return(
    <div className="video-container">
        
        <video autoPlay muted loop id="myVideo" style={{ width: '-webkit-fill-available'}}>
        <source src={props.video} type="video/mp4"/>
        Your browser does not support HTML5 video.
        </video>
        <h1 className="video-heading">Your Heading</h1>
    </div>
 )   
}