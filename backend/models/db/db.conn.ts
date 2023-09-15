import mongoose from 'mongoose'

export default async ()=> await mongoose.connect('mongodb://localhost:27017/mydatabase')
    