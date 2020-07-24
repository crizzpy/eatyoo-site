const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	foodId: {
		type: String,
        required: true,
    },
	dateAdded: {
		type: Date,
		default: Date.now(),
	},
	title: {

    },
    description: {

    },
    imgUrl: {

    },
    tags: {

    },
    linkedTrends: {
        
    }

});

module.exports = mongoose.model('Post', PostSchema);
