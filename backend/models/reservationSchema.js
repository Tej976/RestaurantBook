import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
        minLength: [3, "First name must be filled"],
        maxLenght: [30, "First name cann't exceed length 30"],
    },
    lastName: {
        type: String, 
        required: true,
        minLength: [3, "Last name must be filled"],
        maxLenght: [30, "Last name cann't exceed length 30"],
    },
    email: {
        type: String, 
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
       type: String, 
        required: true,
        minLength: [10, "Phone No must contain 10 digits"],
        maxLenght: [10, "Phone No must contain 10 digits"],
    },
    time: {
        type: String,
        required: true,
    },
    date : {
        type: String,
        required: true,
    },  
});

export const Reservation = mongoose.model("Reservation", reservationSchema);