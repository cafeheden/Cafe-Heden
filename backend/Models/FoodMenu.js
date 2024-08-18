const { Joi } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    isVeg: {
        type: Boolean,
        required: true,
    }
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);
module.exports = MenuItem;