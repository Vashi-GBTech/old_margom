import React from "react";
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function GetInTouch(props) {
    const socialIcon = [props.fbicon, props.instaIcon, props.linkedInIcon];
    const Icons = socialIcon.map((value)=>{
        return  <div className="border border-warning centerFlex rounded-circle me-2 text-center " style={{width:'27px', height:'27px', cursor:"pointer"}}>
            <FontAwesomeIcon icon={value} className='text-warning' />
        </div>
    })
    return (
        <>
            <div className="align-items-center text-white GITbgImage container-fluid d-flex rubicFont">
                <div className="row mt-4">
                    <div className="col-12 mt-5 pt-5 px-5" style={{textAlign: 'justify',textShadow: '2px 2px 2px #727272a6'}}>
                        <p className='w-75 '>Our Approach : Developing great ideas needs great Minds. We scan the capability to our disposal. Using technology and funding, we ensure and build MVPs and put them through our rigorous process of validating MVPs in the real world. If all goes well, the Studio “spins off” the new venture- meaning the Studio recognizes this new company they’ve developed that could be huge. Now along with the Co-Founder, they find a team and resources to run it as an independent startup venture.</p>

                    </div>
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <h1 className='git mx-auto w-75'>Get in touch!</h1>
                        <Table responsive="sm" className='text-white border-0'>

                            <tbody>
                            <tr>
                                <td>Phone</td>
                                <td>(91+) 1234567890</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>user@margom.com</td>
                            </tr>
                            <tr>
                                <td>Social</td>
                                <td className='d-flex justify-content-center'>
                                    {Icons}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )

}