const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: email,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        default: 0.00
    },
    address: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true,
        default: "Fresher"
    },
    startDate: {
        type: Date,
        required: true,
    },
    dateOfHiring: {
        type: Date,
        required: true,
    },
    employeeOrNot: {
        type: String,
        required: true,
        default: "Y"
    }
});

const User = mongoose.Schema('user', userSchema);
module.exports = User;