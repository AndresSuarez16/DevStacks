import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const inscriptionSchema = new Schema ({
    Nameproject: {
        type: String,
    },
    fechaInicio: {
        type: Date,
    },
    fechaFin: {
        type: Date,
    },
    lider: {
        type: String
    },
    estudiante: {
        type: String
    },
    estado: {
        type: String,
        enum: ['ACEPTADA', 'RECHAZADA'],
        default: 'RECHAZADA',
    },
    fechaIngreso: {
        type: Date,
        required: true,
    },
    fechaEgreso: {
        type: Date,
        required: true,
    },
});

export default model('Inscription', inscriptionSchema);