const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    user: { type: String, required: true },
    feedbackText: { type: String, required: true }
});

// Check if the model exists using mongoose.modelNames() to avoid recompilation
const FeedbackModel = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);

module.exports = FeedbackModel;
