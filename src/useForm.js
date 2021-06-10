import { useState, useEffect } from 'react';

const useForm = (callback, validate, intialState = {}) => {

    const [values, setValues] = useState(intialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {

        event.preventDefault();
        if (event) {
                setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        }
    };



    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;