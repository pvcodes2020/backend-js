import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken" //to use these, look for database hooks for middleware and learn to use them from database documentation
import bcrypt from "bcrypt"


const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true // to make optimized searching when searching in DB. Keep in mind this is a costly to do indexing when not required absolutely

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, // we will get it from cloudinary url service to store images and all image assets
        required:true,
       
    },
    coverImage:{
        type:String,// we will get it from cloudinary url service to store images and all image assets
       
    },
    watchHistory:[{
        type:Schema.Type.ObjectId,
        ref:"Vidio"
    }],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String
    }
},
{
    timestamps:true
})
// in javascript call back functions, ()=>{} this function wont have reference to this or contaxt so we dont use it here
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
         return next();    
    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
   return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){

}
export const User= mongoose.model("User",userSchema)