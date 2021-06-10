import React, { useEffect } from 'react'
import useForm from '../../useForm'
import { AddPlayerValidate } from '../../formValidation'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { savePlayer } from '../../store/reducers/teamReducer'

const AddPlayer = (props) => {

    const dispatch = useDispatch();

    const formValues = async () => {
        dispatch(savePlayer(values))
        delete values['firstName']
        delete values['lastName']
        delete values['team']
        props.onHide();
    }

    const { values, errors, handleChange, handleSubmit } = useForm(
        formValues,
        AddPlayerValidate,
        {}
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
                    {props?.data?.id ? 'Edit' : 'Add'} Player
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">First Name</label>
                        <div>
                            <input
                                type="text"
                                className={errors.firstName ? placeholdercolor : formControl}
                                placeholder={errors.firstName || 'Enter First Name'}
                                onChange={handleChange}
                                name="firstName"
                                value={values.firstName || ''}
                            />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label className="control-label">Last Name</label>
                        <div>
                            <input
                                type="text"
                                className={errors.lastName ? placeholdercolor : formControl}
                                placeholder={errors.lastName || 'Enter Last Name'}
                                onChange={handleChange}
                                name="lastName"
                                value={values.lastName || ''}
                            />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label className="control-label">Team</label>
                        <div>
                            <select className={errors.team ? placeholdercolor : formControl} name="team" onChange={handleChange} value={values.team}>
                                <option value="">Select Team</option>
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

export default AddPlayer
