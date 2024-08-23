const mongoose = require('mongoose');

const scanHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  scanData: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ScanHistory = mongoose.model('ScanHistory', scanHistorySchema);
module.exports = ScanHistory;
