const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const TransactionSchema = new Schema({
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    value: {
        type: SchemaTypes.Double,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});

module.exports = Tweet = mongoose.model('tweet', TransactionSchema);