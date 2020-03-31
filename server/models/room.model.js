const mongoose = require('mongoose');

const Room = new mongoose.Schema({
  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  person: { type: 'String', required: true },
  cost: { type: 'Number', required: true },
  record: { type: 'Number', required: true },
  difficulty: { type: 'String', required: true },
  time:{ type: 'String', required: true },
  image: { type: 'String', required: true },
  image1: { type: 'String', required: true },
  image2: { type: 'String', required: true },
  image3: { type: 'String', required: true },
  intro: { type: 'String', required: true },
  description: { type: 'String', required: true },
  quantity: { type: 'Number', required: true },
});

module.exports = mongoose.model('Room', Room);
