import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const inscriptionSchema = new Schema ({
    Name_project: {
        type: String,
    },
    Initial_Date: {
        type: Date,
    },
    End_Date: {
        type: Date,
    },
    Leader: {
        type: String
    },
    Student: {
        type: String
    },
    State: {
        type: String,
        enum: ['ACCEPTED', 'REJECTED'],
        default: 'REJECTED',
    },
    Income_Date: {
        type: Date,
        required: true,
    },
    Outcome_Date: {
        type: Date,
        required: true,
    },
});

export default model('Inscription', inscriptionSchema);