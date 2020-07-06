const mongoose =require('mongoose')
const validator= require('validator')
const User= mongoose.model('User',{
    name:{
        type: String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true,
        lowercase:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error ('Email is invalid')
            }
        }
    },
    mobile:{
        type:Number,
        required:true,
        trim:true,
        lowercase:true
    },
    password: {
        type:String,
        required:true,
        trim:true,
        
    }
})

module.exports=User