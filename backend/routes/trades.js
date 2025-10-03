const express = require('express');
const router = express.Router();
const controller = require('../controllers/tradeController');

router.get('/', controller.getAllTrades);
router.get('/:id', controller.getTrade);
router.post('/', controller.createTrade);
router.put('/:id', controller.updateTrade);
router.delete('/:id', controller.deleteTrade);

module.exports = router;