import { Document } from 'mongoose';

export interface About extends Document {
    readonly text: String;
    readonly created_at: Date;
}