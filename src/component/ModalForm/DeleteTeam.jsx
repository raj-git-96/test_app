import React from 'react'
import useForm from '../../useForm'
import { DeleteTeamValidate } from '../../formValidation'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTeamById } from '../../store/reducers/teamReducer'

const DeleteTeam = (props) => {

    const initialState = {
        team: ""
    }

    const dispatch = useDispatch()

    const formValues = async () => {
        dispatch(deleteTeamById(values.team))
        props.onHide()
    }

    const { values, errors, handleChange, handleSubmit } = useForm(
        formValues,
        DeleteTeamValidate,
        initialState
    );

    const placeholdercolor = "form-control span-error is-danger input-lg";
    const formControl = "form-control input-lg";

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Team
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                        <label className="control-label">Team</label>
                        <div>
                            <select className={errors.team ? placeholdercolor : formControl} name="team" onChange={handleChange} value={values.team}>
                                <option selected value="">Select Team</option>
                                {
                                    props.teamList.map((team, i) => (
                                        <option value={team.id} >{team.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-secondary mt-3" type="submit">SUBMIT</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>

    )
}

export default DeleteTeam
