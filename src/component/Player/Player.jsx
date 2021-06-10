import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../Table/Table'

const Player = () => {

    const tableHeader = [
        { key: "firstName", displayKey: "Players First Name" },
        { key: "lastName", displayKey: "Players Last Name" },
        { key: "team", displayKey: "Team" }
    ]

    const [tableData, setTableData] = useState([])
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const teamList = useSelector(state => state.teamReducer.teamList) || []

    useEffect(() => {
        if (teamList.length > 0) {
            let newTable = []
            teamList.map(team => {
                team.players.length > 0 &&
                    team.players.map(pl => {
                        newTable.push(pl)
                    })
            })
            setTableData(newTable)
        }
    }, [teamList])

    return (
        <>
            <Table
                tableHeader={tableHeader}
                tableData={tableData}
            />
        </>
    )
}

export default Player
