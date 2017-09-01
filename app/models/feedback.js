const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    message: { type: String },
    createdAt: { type: Date }
});

feedbackSchema.pre('save', function(next){
    this.createdAt = Date.now();

    next();
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;