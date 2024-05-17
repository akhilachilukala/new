require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare candidate password with the user's password
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};
// Utility for hashing passwords
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

// Utility for validating user credentials
async function validateUser(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    return user;
}









const chatMessageSchema = new mongoose.Schema({
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);





userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;


const feedbackSchema = new mongoose.Schema({
    user: { type: String, required: true },
    feedbackText: { type: String, required: true }
});

const FeedbackModel = mongoose.model('Feedback', feedbackSchema);

module.exports = FeedbackModel;






module.exports = mongoose.model('User', userSchema);



