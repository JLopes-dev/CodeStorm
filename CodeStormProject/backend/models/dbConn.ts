import mongoose from 'mongoose'

export default async (user: string, password: string)=> {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@codestorm.bfgeaay.mongodb.net/?retryWrites=true&w=majority`
    );
}