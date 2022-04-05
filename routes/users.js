const {Router} = require('express');
const { login, addUser, getAuthUser } = require('../controllers/users');
const { verifyToken } = require('../middlewares/auth');
const router = Router();

router.post('/login',login);
router.get('/auth', verifyToken, getAuthUser)
router.post('/',addUser);

module.exports = router;
