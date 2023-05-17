import React from "react";
// import VideoPlayer from "react-video-js-player/src";
export default function SuccessRate(props) {
    // const videoSrc = props.video;
    // const poster = 'https://www.pexels.com/video/group-of-people-having-a-conversation-3254012/';
return(
    <>
        <div className="container latoFont successRateContainer">
            <div className="row mt-5">
                <div className="col-md-6 position-relative">
                    <div className="d-inline-block greenBgColor lawyers position-absolute px-3 py-3 text-white" style={{borderRadius:"11%",right:'5%', top: "-20%"}}>
                        <h6 className="mb-0" style={{fontWeight:'700'}}>10+</h6>
                        <p className='mb-0'>Lawyer</p>
                    </div>

                    <video src={props.video} controls loop className='w-75 rounded-4' ></video>
                </div>
                <div className="align-items-center col-md-6 d-flex position-relative">
                    <div className="row pt-4 pt-md-0">
                        <div className="col-md-4 col-4">
                            <div className="d-flex justify-content-center">
                                <img src={props.ellipse} className='position-absolute successRAteEllipse'  alt=""/>
                                <h1 className='rubicFont position-relative'  style={{top:'34px'}}>100 <sup style={{right:'12px', fontWeight:"700"}} >%</sup> </h1>
                            </div>
                        </div>
                        <div className="col-md-8 col-8 px-0  text-start">
                            <div className="">
                                <h4 className=' rubicFont'>Our Success Rate</h4>
                                <p className='text-secondary'>When your Liberty is at stake or your Finacial fture is in jeopardy, you need an aggressive defense to your right.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
)
}