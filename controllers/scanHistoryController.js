const ScanHistory = require('../models/ScanHistory');

exports.getScanHistory = async (req, res) => {
  try {
    const scanHistory = await ScanHistory.find({ userId: req.userId });
    res.json(scanHistory);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.addScanHistory = async (req, res) => {
  const { scanData } = req.body;
  try {
    const newScan = new ScanHistory({ userId: req.userId, scanData });
    await newScan.save();
    res.json(newScan);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
