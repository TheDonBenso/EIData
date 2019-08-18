const mongoose = require('mongoose');
const budgetrow = require('../model/BudgetRow');

//id, name, rows[], 
const BudgetSheetSchema = new mongoose.Schema(
    {
        id: {
            type: String, 
            required: true,
            max: 1024,
            min: 6
        },
        name: {
            type: String, 
            required: true,
            max: 1024,
            min: 6
        },
        budgetrows: [budgetrow]
    }
);


module.exports = mongoose.model('BudgetSheet', BudgetSheetSchema);