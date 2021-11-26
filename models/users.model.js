import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Identification: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true,
        enum: ['STUDENT', 'LEADER', 'ADMINISTRATOR'],
    },
    State: {
        type: String,
        enum: ['PENDING', 'AUTHORIZED', 'UNAUTHORIZED'],
        default: 'PENDING',
    }
});

export default model('User', userSchema);