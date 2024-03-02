import mongoose from "mongoose";
const user = new mongoose.Schema({
    name : String ,
    username : String ,
    email : String ,
    image : String ,
    emailVerified : Boolean ,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], 
    followingId : {
        type :Array ,
        default: []
    } ,
    followedId : {
        type : Array , 
        default: [] ,
    } ,
    bio :{
        type : String ,
        required : false ,
    } ,
    profileBanner :{
        type : String ,
        required : false,
    } ,
    location :{
        type : String , 
        required : false
    } ,
    dob:{
        type : Date ,
        required :false ,
        default: Date,
    },
    passion:{
        type :String , 
        required : false
    }
} , {timestamps: { createdAt: true, updatedAt: false }})

export const User = mongoose.models.User || mongoose.model('User' , user)