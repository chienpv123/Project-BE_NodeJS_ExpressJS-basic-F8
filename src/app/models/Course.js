const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//slug auto
const slug = require('mongoose-slug-generator');
//soft delete
const mongooseDelete = require('mongoose-delete');


const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },

}, { timestamps: true });
//add plugins
mongoose.plugin(slug);

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
