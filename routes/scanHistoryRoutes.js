const express = require('express');
const router = express.Router();
const { getScanHistory, addScanHistory } = require('../controllers/scanHistoryController');
const { auth } = require('../controllers/authController');

router.get('/', auth, getScanHistory);
router.post('/', auth, addScanHistory);

module.exports = router;
