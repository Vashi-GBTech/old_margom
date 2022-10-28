import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Footer(props) {
    // const pages = [Abou]

    // socialIcon
    const socialIcon = [props.fbicon, props.instaIcon, props.linkedInIcon];
    const Icons = socialIcon.map((value)=>{
        return  <div className="border border-warning centerFlex rounded-circle me-2 " style={{width:'27px', height:'27px', cursor:"pointer"}}>
            <FontAwesomeIcon icon={value} className='text-warning' />
        </div>
    })
return(
    <>
        <div className="container">
            <div className="row footerBg " style={{padding:'3rem 2rem'}} >
                <div className="col-12">
                    <a href="./" ><h6 className='text-white mb-3'>Back to top</h6></a>
                </div>
                <div className="col-md-6 footerl1 py-4">
                    <div className="logo rubicFont d-flex py-3 ">
                        <FontAwesomeIcon className='text-warning me-1' icon={props.logoIcon} size='xl'/>
                        <h4 className='mb-0 text-white'>Counsel</h4>
                    </div>
                    <div className="d-flex justify-content-between footerLink">
                        <ul className='list-unstyled text-start'>
                            <a href="./"><li>About</li></a>
                            <a href="./"><li>Services</li></a>
                            <a href="./"><li>Consulataion</li></a>
                            <a href="./"><li>Appointment</li></a>
                            <a href="./"><li>Support</li></a>
                        </ul>
                        <ul className='list-unstyled text-start'>
                            <a href="./"><li>Blog</li></a>
                            <a href="./"><li>News</li></a>
                            <a href="./"><li>Layers</li></a>
                            <a href="./"><li>Department</li></a>
                            <a href="./"><li>Support</li></a>
                        </ul>
                        <ul className='list-unstyled text-start'>
                            <a href="./"><li>Terms</li></a>
                            <a href="./"><li>Privacy</li></a>
                            <a href="./"><li>Security</li></a>
                        </ul>
                    </div>
                </div>
                <div className="align-items-center col-md-6 d-flex footerR1">
                    <div className="pe-0 text-end footerMap">
                        <img src={props.map} className='w-75 rounded' alt=""/>
                    </div>
                </div>
                <div className="col-md-4 pt-3"></div>
                <div className="col-md-4 pt-3">
                    <div className="Copywrite text-secondary">
                        <h6>copyright <FontAwesomeIcon icon={props.cpwrite} /> | GBTech</h6>
                    </div>
                </div>
                <div className="col-md-4 socialIcons  d-flex pt-3 justify-content-end">
                    {Icons}
                </div>

            </div>
        </div>
    </>
)
}