const { Schema, model} = require('mongoose');

const UserSchema = new Schema ({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    trim:true
  },
  role:{
    type:String,
    enum:['USER', 'ADMIN'],
    default:'USER'
  }
},{
  versionKey:false
})

module.exports = model('User',UserSchema);