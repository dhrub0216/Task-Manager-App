const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



const me= new User({
    name:'Dhrubva',
    age:12
})
me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error',error)
 })

// const work= mongoose.model('tasks',{
//     description: {
//         type: 'string',
//         trim:true,
//         lowercase: true
//     },
//     boolean: {
//         type: 'boolean'
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,

//         validate(value){
//             if (!validator.isEmail(value)){
//                     throw new Error('Email is valid')
//             }
//         }
//     }
// })

// const today= new work ({
//     description: 'Hello world. Welcome to Samastipur',
//     boolean: false,
//     email:'dhrub216@gmail.com'
// })

// today.save().then(()=>{
//     console.log(today)
// }).catch((error)=>{
// console.log('Error', error)
// })