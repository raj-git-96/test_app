import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePlayerById } from '../../store/reducers/teamReducer'
import './Table.css'

const Table = (props) => {

    const dispatch = useDispatch()

    return (

        <div className="container">
            <div className="table-responsive custom-table-responsive">

                <table className="table custom-table">
                    <thead>
                        <tr>
                            {
                                props.tableHeader && props.tableHeader.length > 0 &&
                                props.tableHeader.map((head, i) => {
                                    return (
                                        <th className={`text-left th-${i}`} key={i}>{head.displayKey}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (props.tableData && props.tableData.length > 0) ?
                            props.tableData.map((row, i) => {
                                return (
                                    <tr key={i}>
                                        {
                                            props.tableHeader && props.tableHeader.length > 0 &&
                                            props.tableHeader.map((head, j) => {
                                                return (
                                                    head.key === 'action' ?
                                                    <td className="text-left" title={row[head.key]} key={j}>
                                                        <a className="cursor-pointer" onClick={()=>dispatch(deletePlayerById({id : row.id, teamId : props.teamId}))} >Delete</a>
                                                    </td>
                                                    :
                                                    <td className="text-left" title={row[head.key]} key={j}>{row[head.key] && row[head.key].length > 30 ? (row[head.key].substr(0, 30) + '...' || '-') : row[head.key]}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                            :
                            <tr>
                                <td className="text-center" colSpan={props.tableHeader?.length}>Sorry! No Data Available</td>
                            </tr>

                        }
                    </tbody>
                </table>
            </div>


        </div>

    )
}

export default Table
