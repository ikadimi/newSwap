const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    password_reset_key: {
        type: String,
        default: ""
    },
    offers: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = User = mongoose.model('users', userSchema);