import React from 'react'
import useForm from '../../useForm';
import { AddTeamValidate } from '../../formValidation'
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { save } from '../../store/reducers/teamReducer';

const AddTeam = (props) => {

    const dispatch = useDispatch()

    const formValues = async () => {
        dispatch(save(values))
        delete values['name']
        props.onHide()

    }

    const { values, errors, handleChange, handleSubmit } = useForm(
        formValues,
        AddTeamValidate,
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
                    {props?.data?.id ? 'Edit' : 'Add'} Team
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">Team Name</label>
                        <div>
                            <input
                                type="text"
                                className={errors.name ? placeholdercolor : formControl}
                                placeholder={errors.name || 'Enter Name'}
                                onChange={handleChange}
                                name="name"
                                value={values.name || ''}
                            />
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

export default AddTeam
