const mongoose = require("mongoose");

const PaymentsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'must provider a description'],
        trim: true,
        maxlength: [20, 'description can not be more than 20 characters'],
    },
    amount: {
        type: Number,
        required: [true, 'must provider a description'],
    },
    expense: {
        type: Boolean,
        default: true,
    }

});

module.exports = mongoose.model('Payments', PaymentsSchema);