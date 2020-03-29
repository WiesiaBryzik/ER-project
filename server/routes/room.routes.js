const express = require('express');
const router = express.Router();

const RoomController = require('../controllers/room.controller');

router.route('/rooms').get(RoomController.getAllRooms);

router.route('/room/:id').get(RoomController.getRoomById);

module.exports = router;
