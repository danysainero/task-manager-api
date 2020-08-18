const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const boardSchema = new mongoose.Schema({
  boardTitle: {
    type: String,
    required: true,
  },
  boardDescription: {
    type: String,
    required: true,
  },
  boardCreatedDate: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'cards',
    },
  ],
})

module.exports = mongoose.model('Board', boardSchema)
