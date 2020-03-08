const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    name: { type: String, required: true },
    imagePath: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);