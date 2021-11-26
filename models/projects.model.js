import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Budget: {
        type: Number,
        required: true,
    },
    Initial_Date: {
        type: Date,
        required: true,
    },
    End_Date: {
        type: Date,
        required: true,
    },
    State: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'INACTIVE',
    },
    Phase: {
        type: String,
        enum: ['STARTED', 'DEVELOPMENT', 'FINISHED', 'NULL'],
        default: 'NULL',
    },
    Leader: {
        type: String
    },
    Objectives: [
        {
            Description: {
                type: String,
                required: true,
            },
            Type: {
                type: String,
                enum: ['GENERAL', 'SPECIFIC'],
                required: true,
            },
        },
    ],
});

export default model('Project', projectSchema);