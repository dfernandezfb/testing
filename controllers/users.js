const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.login = async(req,res)=>{
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email:email});
    if(!user){
      return res.status(404).json({message:'Credenciales incorrectas'})
    }
    const passwordCheck = await bcrypt.compare(password,user.password);
    if(!passwordCheck){
      return res.status(404).json({message:'Credenciales incorrectas'})
    }
    const token = jwt.sign({id:user._id}, process.env.SECRET_KEY,{expiresIn:'60m'});
    res.status(200).json({ok:true, token:token})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:'Ha ocurrido un error'});
  }
}
exports.addUser = async(req,res)=>{
  try {
    const {password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password,salt);
    const newUser = new User({
      ...req.body,
      password:encryptedPassword
    });
    await newUser.save();
    res.status(200).json({message:'Usuario guardado'});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:'Ha ocurrido un error'});
  }
}

exports.getAuthUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).select('-password');
    if(!user) {
      return res.status(401).json({ msg: 'No posee permisos' });
    }
    res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error });
  }
}