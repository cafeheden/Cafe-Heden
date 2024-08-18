const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name: {
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
    userType: {
        type: String,
        required: true,
    }
});

const AdminModel = mongoose.model('admins', AdminSchema);
module.exports = AdminModel;