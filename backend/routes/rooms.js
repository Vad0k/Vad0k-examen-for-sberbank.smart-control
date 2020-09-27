const express = require('express')
const router = express.Router()
const controller = require('../controllers/rooms')

router.get('/:idHouse', controller.actionRoomsState) // get state for rooms
router.post('/:idHouse', controller.actionAddRoom) // add house to list
router.delete('/:idHouse/:idRoom', controller.actionRemoveRoom) // remove house
router.patch('/:idHouse/:idRoom', controller.actionChoseHouse) // chose house

module.exports = router;