const Rooms = require('../models/room.model');

exports.getAllRooms = async (req, res) => {

  try {
    res.status(200).json(await Rooms.find());
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getRoomById = async (req, res) => {

  try {
    res.status(200).json(await Rooms.find({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};
