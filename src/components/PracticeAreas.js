import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function PracticeAreas(props) {
    const practiceAreasLink = ['Personal Injury Law', 'Employemnent Law', 'Immigration Low', 'Dispute Resolution Law', 'Property Law'];
    const LinkList = practiceAreasLink.map((value, index, array) => {
        return <div
            className=" mx-auto w-75 d-flex justify-content-between align-items-center px-3 py-2 rounded linkArrow mb-2" key={index}>
            <div className="d-flex">
                <h6 className='text-secondary mb-0 pe-2' style={{fontWeight: 600,}}>{index + 1}.</h6>
                <h5 style={{fontWeight: 600,}} className='text-start mb-0'>{value}</h5>
            </div>
            <FontAwesomeIcon className='iconOnHover' icon={props.uparroe} transform={{rotate: 45}}/>

        </div>
    });
    return (
        <>
            <div className="container latoFont">
                <div className="row">
                    <div className="col-md-6 px-md-4 py-5 text-dark text-start">
                        <h2 className='pb-3 ps-5 pt-4 rubicFont w-75'><b>Practice Areas and Services</b></h2>
                        <p className='ps-5 text-secondary ' style={{width: "88%"}}>when your Liberty is at stake or your Fibacial
                            future is in jeopardy, you need an aggressive defense to project ypur rights.</p>
                        <a href="./" className='ps-5 text-start text-warning' style={{textDecoration: 'none'}}>Learn
                            More</a>
                    </div>

                    <div className="col-md-6 d-flex align-items-center">
                        <div className="practiceAreasLink w-100">
                            {LinkList}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}