const Trade = require('../models/Trade');

exports.getAllTrades = async (req, res) => {
  try {
    const trades = await Trade.find().sort({ date: -1 });
    res.json(trades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTrade = async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) return res.status(404).json({ message: 'Trade not found' });
    res.json(trade);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTrade = async (req, res) => {
  try {
    const newTrade = new Trade(req.body);
    const saved = await newTrade.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTrade = async (req, res) => {
  try {
    const updated = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Trade not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTrade = async (req, res) => {
  try {
    const deleted = await Trade.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Trade not found' });
    res.json({ message: 'Trade deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};