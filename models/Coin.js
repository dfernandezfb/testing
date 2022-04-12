const {Schema, model} = require('mongoose')

const CoinSchema = new Schema({
  name:{
    type:String,
    trim:true,
    required:true
  },
  abbreviation:{
    type:String,
    trim:true,
    required:true
  }
},{
  versionKey:false,
  timestamps:true
})

module.exports = model('Coin', CoinSchema)