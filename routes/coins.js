const {Router} = require('express');
const { getCoins, addCoin, deleteCoin, getCoin, updateCoin } = require('../controllers/coins');
const { verifyToken } = require('../middlewares/auth');
const router = Router();

router.get('/', verifyToken, getCoins)
router.get('/:id', getCoin)
router.post('/', addCoin)
router.put('/:id', updateCoin)
router.delete('/:id', deleteCoin)

module.exports = router;
