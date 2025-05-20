const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

router.post('/book', async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
