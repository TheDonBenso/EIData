const mongoose = require('mongoose');

//id, name, number value, sheetid
const BudgetRowSchema = new mongoose.Schema({

    id: { 
        type: String, 
        required: true,
        max: 1024,
        min: 6
    },
    sheetid: { 
        type: String, 
        required: true,
        max: 1024,
        min: 6},
    name: {
        type: String, 
        required: true,
        max: 1024,
        min: 6
    },
    value: {
        type: Number, 
        required: true,
        max: 1024,
        min: 6}
});


module.exports = mongoose.model('BudgetRow', BudgetRowSchema);