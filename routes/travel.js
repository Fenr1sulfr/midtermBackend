const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const indexPath = path.resolve(__dirname, '../views/calculating.html');
  res.sendFile(indexPath);
});

module.exports = router;
