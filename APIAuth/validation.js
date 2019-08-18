
const Joi = require('@hapi/joi');

const registerValidation = (data) => {    
    const schema= {
        name:  Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }  

    return Joi.validate(data, schema);
};

const loginValidation = (data) => {
    const schema= {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }  

    return Joi.validate(data, schema);
}

const budgetSheetValidation = (data) =>{
    const schema = {

    }

    Joi.validate(data, schema);
}

const budgetRowValidation = (data) => {

    const schema = {

    }

    Joi.validate(data, schema);
}

module.exports.budgetRowValidation = budgetRowValidation;
module.exports.budgetSheetValidation = budgetSheetValidation;
module.exports.registerValidation = registerValidation;

module.exports.loginValidation = loginValidation;