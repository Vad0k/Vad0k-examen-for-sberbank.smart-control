const express = require('express')
const router = express.Router()
const controller = require('../controllers/houses')

router.get('/', controller.actionHousesState) // get state for house
router.post('/', controller.actionAddHouse) // add house to list
router.delete('/:id', controller.actionRemoveHouse) // remove house
router.patch('/:id', controller.actionChoseHouse) // chose house

module.exports = router;