import React from "react";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CoPromoterModel(props) {
    return(
        <>
            <div className="container-fluid rubicFont border" style={{height:'100vh', overflow: 'hidden'}}>
                <div className=" row">

                    <div className="col-md-6 text-start" style={{ padding:'2rem 3rem'}}>
                        <div className="mt-5 pt-4">
                            <h1 className='CoFounderModel '>Co-Promoter Model</h1>
                            <p className='latoFont'>For Entrepreneur's Saying, I have an MVP, but I need help to refine the product with connections, technology, marketing, raising capital, and growth/ scale objectives.”</p>
                            <Button variant="dark" className="text-white" >Learn More <FontAwesomeIcon className='ms-2' icon={props.arrowIcon} /></Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={props.promotpr} className='w-100' alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}