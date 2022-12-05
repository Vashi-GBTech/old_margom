import React from "react";
import {Button} from "react-bootstrap";

export default function WhyWe(props) {
 return(
     <>
         <div className="container-fluid rubicFont">
             <div className="row speechImage">
                 <div className="col-md-6 text-start">
                     <img src={props.om} style={{width:'40%'}} alt=""/>
                      {/*<h1 className='d-flex text-white py-3'>MARG <img src={props.om} style={{width:'45px'}} alt=""/></h1>*/}
                 </div>
                 <div className="col-md-6 text-start" style={{background:'#d74237a3', padding:'2rem 3rem'}}>
                     <h1 className='WE_EXIST border-bottom pb-2 mb-3 border-dark'>WHY WE EXIST</h1>
                     <h2>Marg'om Accelerator Studio helps scale companies</h2>
                     <p className='latoFont'>By connections, enablers of Clarity, Capacity building, and Capital raising with the passion of leveraging the Spirit of Entrepreneurial Indians. We partner with an entrepreneurial mindset.</p>
                    <Button variant="dark" className="text-white" >Know the Facts</Button>
                 </div>
             </div>
         </div>
     </>
 )
}