import React from "react";
import {Button} from "react-bootstrap";

export default function PartnershipModels(props) {
    const PartenersArray = [{PT:'Co-Promoter Model'},{PT:'Build Model', more:'Learn More'},{PT:'Hired Model', more:'Learn More'},{PT:'Co-Founder Model', more:'Learn More'}]
        const Parteners= PartenersArray.map((value, index)=>{
            let learnBtn = <Button variant="dark" size='sm'>{value.more}</Button> ;
            if (index == 0){
                learnBtn = '';
            }
            return <div className="border pt-2 px-3 mb-3 rounded PartnerWith">
                <h2>{value.PT}</h2>
                <div className="text-end">
                    {learnBtn}
                </div>
            </div>
        })
    return(
        <>
            <div className="container-fluid rubicFont" style={{background:'#bbbbbba3', padding:'2rem 3rem'}} >
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-between text-start">
                        <h1 className='w-75 py-3'>Our
                            Partnership
                            Models</h1>
                        <img src={props.dotImage} className='w-25' alt=""/>
                    </div>
                    <div className="col-md-6 text-start" >
                        {Parteners}
                       {/*<div className="border pt-2 px-3 rounded PartnerWith">*/}
                       {/*    <h2>Co-Promoter*/}
                       {/*        Model</h2>*/}
                       {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}