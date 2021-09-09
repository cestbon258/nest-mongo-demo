// Mongoose Schema

import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const AboutSchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   [],
    date: Date
})