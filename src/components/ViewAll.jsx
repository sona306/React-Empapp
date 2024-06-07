import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {"EmpName":"Shelna EK","EmpId":1000,"Designation":"Developer"},
            {"EmpName":"Archa","EmpId":1001,"Designation":"Tester"},
            {"EmpName":"Sreejith","EmpId":1002,"Designation":"Developer"},
            {"EmpName":"Roshny Binu","EmpId":1003,"Designation":"Tester"},
        ]
    )
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                            (value,index)=>
                                {
                                return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div class="card">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">{value.EmpName}</li>
                                                    <li class="list-group-item">{value.EmpId}</li>
                                                    <li class="list-group-item">{value.Designation}</li>
                                                </ul>
                                            </div>
                                        </div>
                                }
                            )
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll