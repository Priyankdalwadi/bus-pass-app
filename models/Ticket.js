const mongoose = require('mongoose');
const TicketSchema = new mongoose.Schema({
  user: String,
  busNumber: String,
  date: Date,
  price: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Ticket', TicketSchema);
