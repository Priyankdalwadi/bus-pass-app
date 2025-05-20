const express = require('express');
const router = express.Router();
const BusPass = require('../models/BusPass');

// POST: Create new pass
router.post('/apply', async (req, res) => {
  try {
    const pass = new BusPass(req.body);
    await pass.save();
    res.status(201).json(pass);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create pass', details: error.message });
  }
});

// GET: All passes
router.get('/', async (req, res) => {
  try {
    const passes = await BusPass.find();
    res.json(passes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch passes' });
  }
});

module.exports = router;
