import { Schema, model } from "mongoose"

const userModel = model(`userAccount`, new Schema({
    name: {type: String, require: true}, 
    password: {type: String, require: true}
}))
const deletedUserModel = model('deletedUser', new Schema({
    name: {type: String, require: true}, 
    password: {type: String, require: true},
}))
export {deletedUserModel, userModel}