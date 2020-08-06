const mongoose = require('mongoose');
const uuid = require('uuid')

const ListSchema = mongoose.Schema({
	listId: {
		type: String,
        required: true,
        defaut: uuid.v4()
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
    dishes: {
        type: Array,
        required: true
    },
    previewImgUrl: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: false
    },
    linkedTrends: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('List', ListSchema);
