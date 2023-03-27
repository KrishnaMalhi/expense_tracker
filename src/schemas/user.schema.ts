import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: { type: String, required: true },
    role: { type: String, default: 'user' },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    sources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Source' }],
    createdAt: { type: Date, default: Date.now },
});

export interface User extends mongoose.Document {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    categories: string[];
    sources: string[];
}