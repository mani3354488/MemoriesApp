const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    shipperConsignee: {
        type: String,
        required: true,
    },
    modeOfTransport: {
        type: String,
        required: true,
    },
    commodity: {
        type: String,
        required: true
    },
    valueOfCommodity: {
        type: String,
        required: true
    },
    weight: {
        type: String, 
        required: true
    },
    placeOfOrgin: {
        type: String, 
        required: true
    },
    destination: {
        type: String, 
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'InReview', 'Accepted', 'Canceled']
    }     
});

module.exports = mongoose.model("Booking", BookingSchema);
