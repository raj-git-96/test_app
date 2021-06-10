import React, { useState } from 'react'
import Accordian from '../Accordian/Accordian'
import Response from '../../res.json'
import AddTeam from '../ModalForm/AddTeam';
import AddPlayer from '../ModalForm/AddPlayer';
import { useSelector } from 'react-redux';
import DeleteTeam from '../ModalForm/DeleteTeam';
// import AddTeam from '../ModalForm/AddTeam'

const Team = () => {

    const [teamModalShow, setTeamModalShow] = useState(false);
    const [delTeamModalShow, setDelTeamModalShow] = useState(false);
    const [playerModalShow, setPlayerModalShow] = useState(false);

    const tableHeader = [
        { key: "firstName", displayKey: "Players First Name" },
        { key: "lastName", displayKey: "Players Last Name" },
        { key: "action", displayKey: "Action" }
    ]

    const { teamList } = useSelector(state => state.teamReducer) || []

    return (
        <>
            <a className="btn btn-primary" onClick={() => setTeamModalShow(true)} >Add New Team</a>
            {
                teamList.length > 0 &&
                <>
                    <a className="btn btn-primary ml-2" onClick={() => setDelTeamModalShow(true)} >Delete Team</a>
                    <a className="btn btn-primary ml-2" onClick={() => setPlayerModalShow(true)} >Add New Player</a>
                </>
            }
            {
                teamList.map((team, i) => (
                    <Accordian
                        key={i}
                        accIndex={i}
                        teamData={team}
                        tableHeader={tableHeader}
                        tableData={team.players || []}
                    />
                ))
            }

            <AddTeam
                show={teamModalShow}
                onHide={() => setTeamModalShow(false)}
            />
            <DeleteTeam
                teamList={teamList}
                show={delTeamModalShow}
                onHide={() => setDelTeamModalShow(false)}
            />
            <AddPlayer
                teamList={teamList}
                show={playerModalShow}
                onHide={() => setPlayerModalShow(false)}
            />
        </>
    )
}

export default Team
