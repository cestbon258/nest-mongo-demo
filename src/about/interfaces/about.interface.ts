// Interface

import { Document } from 'mongoose';

export interface About extends Document {
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   [],
    date: Date
}
