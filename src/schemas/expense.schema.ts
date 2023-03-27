import * as mongoose from 'mongoose';

export const ExpenseSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    source: { type: mongoose.Schema.Types.ObjectId, ref: 'Source', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
});

export interface Expense extends mongoose.Document {
    id: string;
    amount: number;
    category: string;
    source: string;
    user: string;
    createdAt: Date;
}