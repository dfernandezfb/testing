const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.header('x-auth-token');
  if(!token) {
    return res.status(401).json({ msg: 'El token no es válido' });
  }
  try {
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = id;
    next();
  } catch (error) {
    return res.status(400).json({ error })
  }
}