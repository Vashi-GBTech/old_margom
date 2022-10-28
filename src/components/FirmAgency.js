import React from "react";
export default function FirmAgency() {
return(
    <>
        <div className="container mt-5 latoFont">
            <div className="row">
                <div className="col-md-6 " style={{background:'#f3f3f4'}}>
                    <div className="h-50 border-bottom align-items-end d-flex no_cases py-md-0 justify-content-center">
                        <div className="_500 align-items-center mb-md-2  d-flex">
                            <h1 className='rubicFont'>500+</h1>
                            <p className=' ps-2 text-secondary'>We have won the cases</p>
                        </div>
                    </div>
                    <div className="border-top h-50 d-flex no_award align-items-baseline justify-content-center pt-3" >
                        <div className="_100 align-items-center  d-flex ">
                            <h1 className='rubicFont'>100+</h1>
                            <p className=' ps-2 text-secondary'>We have received award</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-md-4 py-5 text-start text-white" style={{background:'#032019'}} >
                    <h2 className='pb-3 ps-5 pt-4 rubicFont w-75'>We are The Best Law Firm Agency.</h2>
                    <p className='ps-5 ' style={{width: "88%"}} >when your Liberty is at stake or your Fibacial future is in jeopardy, you need an aggressive defense to project ypur rights.</p>
                    <a href="./" className='ps-5 text-start text-warning' style={{textDecoration:'none'}}>Learn More</a>
                </div>
            </div>
        </div>
    </>
)
}