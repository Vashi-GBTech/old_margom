import React from "react";
import Table from 'react-bootstrap/Table';

export default function SkillsExpertise(props) {
    const tableData = [{
        year: 'Year',
        Heading: 'Designation',
        subHeading: 'Role',
        details: 'Implements cross-channel marketing and advertising campaigns. Responsible for handling B2B and B2C client marketing campaigns, from planning to optimization.'
    },
        {
            year: 'Year',
            Heading: 'Designation',
            subHeading: 'Role',
            details: 'Implements cross-channel marketing and advertising campaigns. Responsible for handling B2B and B2C client marketing campaigns, from planning to optimization.'
        },
        {
            year: 'Year',
            Heading: 'Designation',
            subHeading: 'Role',
            details: 'Implements cross-channel marketing and advertising campaigns. Responsible for handling B2B and B2C client marketing campaigns, from planning to optimization.'
        }];

    const table = tableData.map((value, index) => {
        return <tr key={index}>
            <th>{value.year}</th>
            <td className='ps-3'>
                <h6 style={{color: '#597b6a'}}>{value.Heading}</h6>
                <p className='mb-1' style={{fontStyle: 'italic'}}>{value.subHeading}</p>
                <p className='w-75'>{value.details}</p>
            </td>
        </tr>
    })
    return (
        <>
            <div className="container-fluid rubicFont " style={{backgroundColor: '#d3d3d4'}}>
                <div className="row">
                    <div className="col-md-4 p-3">
                        <img src={props.DR} className='w-50 rounded' alt=""/>
                    </div>
                    <div className="col-md-8"></div>


                </div>
                <div className="row">
                    <div className="col-md-5">
                        <h1 className='w-75' style={{color: '#597b6a'}}>Skills,
                            Expertise &
                            Passion</h1>
                    </div>
                    <div className="col-md-7">
                        <div className="">
                            <Table responsive="sm" className='text-start  border-0'>

                                <tbody>
                                {table}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}