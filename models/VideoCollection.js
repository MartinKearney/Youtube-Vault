const mongoose = require('mongoose');

const VideoCollectionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('VideoCollection', VideoCollectionSchema);
