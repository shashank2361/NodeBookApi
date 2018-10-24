var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;
mongoose.set('debug', true);

var bookModel = new Schema({
    //_id: { type: objectId, auto: true },
    title: { type: String },
    auther: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', bookModel );