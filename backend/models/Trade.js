const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  type: { type: String, enum: ['BUY', 'SELL'], required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  notes: { type: String }
});

module.exports = mongoose.model('Trade', TradeSchema);