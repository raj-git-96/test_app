export const AddPlayerValidate = (values) => {
    let errors = {};

    if (!values.firstName) {

        errors.firstName = 'First Name is required *';
    }
    if (!values.lastName) {

        errors.lastName = 'Last Name is required *';
    }
    if (!values.team) {

        errors.team = 'Team is required *';
    }

    return errors;
};

export const AddTeamValidate = (values) => {
    let errors = {};

    if (!values.name) {

        errors.name = 'Name is required *';
    }

    return errors;
};

export const DeleteTeamValidate = (values) => {
    let errors = {};

    if (!values.team) {

        errors.team = 'Team is required *';
    }

    return errors;
};


