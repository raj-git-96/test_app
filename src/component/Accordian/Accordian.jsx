import React from 'react'
import Table from '../Table/Table'
import './Accordian.css'

const Accordian = (props) => {
    return (
        <div id={`accordion-${props.accIndex}`} className="myaccordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target={`#collapseOne-${props.accIndex}`} aria-expanded="false" aria-controls="collapseOne">
                            {props.teamData.name}
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                        </button>
                    </h2>
                </div>
                <div id={`collapseOne-${props.accIndex}`} className="collapse" aria-labelledby="headingOne" data-parent={`#accordion-${props.accIndex}`}>
                    <div className="card-body">
                        <Table teamId={props.teamData?.id} tableHeader={props.tableHeader} tableData={props.tableData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian
