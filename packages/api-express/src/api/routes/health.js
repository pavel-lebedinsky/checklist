const express = require('express');
const health = require('../services/health');

const router = new express.Router();

/**
 * Get api info
 */
router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await health.getHealthInfo(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;
