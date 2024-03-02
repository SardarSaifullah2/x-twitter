import mongoose from 'mongoose'
const postSchema = new mongoose.Schema({
    body:{
        type : String 
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User'
    },
    image : {
        type : String ,
        required : false 
    } ,
    likeId : {
        type : Array ,
        default : []
    } ,
    comment : {
        type :Array,
        ref : 'Comment' ,
        default : []
    },
    parent : {
        type : mongoose.Schema.Types.ObjectId ,
        ref :"Post" ,
        default : null
    }
} ,{
    timestamps: true
})
export const Post = mongoose.models.Post || mongoose.model('Post' , postSchema)