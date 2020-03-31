const Room = require('../models/room.model');

exports.getRooms = async (req, res) => {

  try {
    res.status(200).json(await Room.find());
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getRoomById = async (req, res) => {

  try {
    res.status(200).json(await Room.find({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};
