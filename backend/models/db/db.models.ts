import mongoose, { Schema } from "mongoose";

export default mongoose.model('userAccount', new Schema({
    name: { 
        type: String, 
        required: true 
    },

    nickname: { 
        type: String, 
        required: false 
    },
    
    password: { 
        type: String, 
        required: true 
    },

}))