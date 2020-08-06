const mongoose = require('mongoose');

const DishSchema = mongoose.Schema({
	foodId: {
		type: String,
        required: true,
    },
	dateAdded: {
		type: Date,
		default: Date.now(),
	},
	title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: false,
    },
    linkedTrends: {
        type: Array,
        required: false
    }

});

module.exports = mongoose.model('Dish', DishSchema);
