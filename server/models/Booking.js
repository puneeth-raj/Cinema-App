import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    user: {type: String , requred: true, ref: 'User'},
    show: {type: String , requred: true, ref: 'Show'},
    amount: {type: Number , requred: true},
    bookedSeats: {type: Array , requred: true},
    isPaid: {type: Number , requred: false},
    paymentLink: {type: String}
}, {timestamps:true})

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking;