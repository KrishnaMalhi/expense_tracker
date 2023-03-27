import * as mongoose from 'mongoose';

export const SourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
});

export interface Source extends mongoose.Document {
    id: string;
    name: string;
    user: string;
}