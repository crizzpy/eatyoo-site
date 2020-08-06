const mongoose = require('mongoose');
const uuid = require('uuid')

const RecipeSchema = mongoose.Schema({
	recipeId: {
		type: String,
        required: true,
        default: uuid.v4()
    },
	dateAdded: {
		type: Date,
		default: Date.now(),
	},
	associatedDish: {
        type: String,
        required: true
    },
    dietCategory: {
        type: String,
        required: true,
    },
    // tags: {
    //     type: Array,
    //     required: false,
    // },
    // linkedTrends: {
    //     type: Array,
    //     required: false
    // }

});

module.exports = mongoose.model('Dish', RecipeSchema);
