import React from "react";
import Button from 'react-bootstrap/Button';
export default function FindLawyer() {
return(
    <>
        <div className="container rubicFont text-white">
            <div className="row greenBgColor" style={{padding:'4rem 2rem'}}>
                <div className="col-md-6 text-center">
                    <div className="w-75 text-start">
                        <h2 className='mb-3'>Find The Beat and Expert Lawyer For Your Case</h2>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="w-75 text-start">
                        <p className='latoFont mb-3'>When your Liberty is at stake or your Finacial fture is in jeopardy, you need an aggressive defense to your right.</p>
                        <Button className='text-white text-start' variant="warning" type='button' size='sm'  >Warning</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    </>
)
}