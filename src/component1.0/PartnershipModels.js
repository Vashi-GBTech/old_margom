import React from "react";
import {Button} from "react-bootstrap";
import CoPromoterModel from "./CoPromoterModel";
import CoFounderModel from "./CoFounderModel";
import Promoter from "../images/promoter.jpg";
import model from "../images/model.jpg";
// import model from './images/model.jpg'
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default function PartnershipModels(props) {
    // events
    const test = (a, id, pageId) => {
        console.log('this btn pageId is :' + pageId);
        document.getElementById('ourPartnership').style.display = 'none';
        document.getElementById(`${pageId}`).style.display = 'block';
        console.log(document.getElementById(pageId))
    }

    const PartenersArray = [{
        PT: 'Co-Promoter Model',
        more: 'Learn More',
        redirectPageId: 'CoPromoterModel'
    }, {PT: 'Build Model', more: 'Learn More', redirectPageId: 'not created 1'}, {
        PT: 'Hired Model',
        more: 'Learn More',
        redirectPageId: 'not created 2'
    }, {PT: 'Co-Founder Model', more: 'Learn More', redirectPageId: 'CoFounderModel'}]
    const Parteners = PartenersArray.map((value, index) => {
        let learnBtn = <Button variant="dark" onClick={() => test('this is test', index, value.redirectPageId)}
                               size='sm'>{value.more}</Button>;
        // if (index === 0){
        //     learnBtn = '';
        // }
        return <div className="border pt-2 px-3 mb-3 rounded PartnerWith" key={index}>
            <h2>{value.PT}</h2>
            <div className="text-end">
                {learnBtn}
            </div>
        </div>
    })
    return (
        <>
            <div className="container-fluid rubicFont" id='ourPartnership' style={{background: '#bbbbbba3', padding: '2rem 3rem'}}>
                <div className="row" id='PartnershipModel'>
                    <div className="col-md-6 d-flex flex-column justify-content-between text-start">
                        <h1 className='w-75 py-3'>Our
                            Partnership
                            Models</h1>
                        <img src={props.dotImage} className='w-25' alt=""/>
                    </div>
                    <div className="col-md-6 text-start">
                        {Parteners}
                        {/*<div className="border pt-2 px-3 rounded PartnerWith">*/}
                        {/*    <h2>Co-Promoter*/}
                        {/*        Model</h2>*/}
                        {/*</div>*/}

                    </div>
                </div>
                <CoPromoterModel promotpr={Promoter} display='none'/>
                <CoFounderModel model={model} arrowIcon={faChevronRight} display='none'/>
            </div>

        </>
    )
}