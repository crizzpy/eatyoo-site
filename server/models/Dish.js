const mongoose = require('mongoose');
const uuid = require('uuid')

const DishSchema = mongoose.Schema({
	dishId: {
		type: String,
        required: true,
        default: uuid.v4()
    },
	dateAdded: {
        type: Date,
        required: true,
		default: Date.now(),
	},
	dishTitle: {
        type: String,
        required: true,
    },
    dishDesc: {
        type: String,
        required: true,
    },
    dishImgUrl: {
        type: String,
        required: true,
    },
    dishTags: {
        type: Array,
        required: false,
    },
    dishMemeUrl: {
        type: String,
        required: false
    },
    dishAssociated: {
        type: Array,
        required: false
    }

});

module.exports = mongoose.model('Dish', DishSchema);
