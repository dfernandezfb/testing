const Coin = require('./../models/Coin');
const User = require('./../models/User');

exports.getCoins = async(req,res)=>{
  try {
    const coins = await Coin.find();
    res.status(200).json({coins:coins})
  } catch (error) {
    console.log(error);
    res.status(400).json({message:'error'})
  }
}

exports.getCoin = async(req,res)=>{
  try {
    const id = req.params.id;
    const coin = await Coin.findById(id);
    res.status(200).json({coin:coin})
  } catch (error) {
    console.log(error);
    res.status(400).json({message:'error'})
  }
}

exports.updateCoin = async(req,res)=>{
  try {
    const id = req.params.id;
    const coinUpdated = await Coin.findByIdAndUpdate(id,req.body);
    res.status(200).json({coinUpdated:coinUpdated})
  } catch (error) {
    console.log(error);
    res.status(400).json({message:'error'})
  }
}

exports.addCoin = async(req,res)=>{
  try {
    console.log(req.body);
    const newCoin = new Coin(req.body);
    await newCoin.save()
    res.status(200).json({ok:true, coinAdded:newCoin})
  } catch (error) {
    console.log(error);
    res.status(400).json({message:'error'})
  }
}

exports.deleteCoin = async(req,res)=>{
  try {
    const id = req.params.id;
    await Coin.findByIdAndDelete(id);
    res.status(200).json({ok:true, message: 'Coin eliminada'})
  } catch (error) {
    console.log(error);
    res.status(400).json({message:'error'})
  }
}