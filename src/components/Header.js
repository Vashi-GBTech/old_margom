import React from "react";
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Header(props) {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-6">
                        <div className="logo rubicFont d-flex py-3 ">
                            <FontAwesomeIcon className='text-warning me-1' icon={props.logoIcon} size='2xl'/>
                            <h3 className='mb-0'>Counsel</h3>
                        </div>
                    </div>
                    <div className="col-md-7 col-3 px-0 px-md-3 ">
                        <div className="d-none d-md-block">
                            <ul className='d-flex text-secondary justify-content-around latoFont list-unstyled mb-0 ps-4 w-100 '
                                style={{fontWeight: 600}}>
                                <li className='text-warning me-1'>Home</li>
                                <li>Services</li>
                                <li>Lawyers</li>
                                <li>Blog</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="d-block d-md-none">
                            <div className=" d-flex justify-content-end pe-2">
                                <FontAwesomeIcon className='text-warning ' icon={props.mobileBar} size='2xl'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-3 px-sm-0 ">
                        <div className=" ms-auto py-3 w-75 signUpBtn">
                            <Button variant="dark" size='sm'>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}