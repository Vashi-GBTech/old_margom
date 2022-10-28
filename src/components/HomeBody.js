import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomeBody(props){
    return(
        <>
            <div className="container latoFont   " style={{ minHeight:'480px'}}>
                <div className="row mt-0 mt-md-4 ">
                    <div className="col-md-5 text-start ">
                       <div className="mt-4 mt-md-5">
                           <Badge pill className='lawBadges mb-2' >Secondary</Badge>{' '}
                           <h1 className='rubicFont text-capitalize' style={{width:'69%',fontWeight: '600'}}>
                               no case too big, No case too Small
                           </h1>
                           <p className='text-secondary'> When your Liberty is at stake or your Financial Future is in jeopardy, you need an aggressive defense to project your rights.</p>
                           <div className="d-flex justify-content-around">
                               <Button variant="warning"   className='text-white px-3' ><b>Our Services</b></Button>{' '}
                               <Button variant="light" className='border px-3' ><b>Request A Call</b></Button>{' '}
                           </div>
                       </div>
                    </div>
                    <div className="col-md-7  position-relative " style={{marginTop:'4rem'}} >
                        <div className=" d-flex align-items-center position-absolute" style={{top:'-10%', left:'5%'}}>
                            <img src={props.client1} className='clients client-1' alt=""/>
                            <img src={props.client2} className='clients client-2' alt=""/>
                            <img src={props.client3} className='clients client-3' alt=""/>
                            <div className="ratingStar">
                                <p className='mb-0 small'>10K+ Clients</p>
                                <FontAwesomeIcon className='text-warning' size='xs' icon={props.starIcon} /> <span> 4.7</span>
                            </div>

                        </div>
                        <div className="">
                            <div className="">
                                <img src={props.arraow} className='position-absolute arrowImage' alt=""/>
                                <img src={props.ellipse} className='position-absolute ellipseImage' alt=""/>
                            </div>
                            <img src={props.user} className='userImage position-absolute ' alt=""/>
                        </div>
                        {/*<div className="h-100 headerBgImage position-absolute w-50" style={{right:'13px'}}> </div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}