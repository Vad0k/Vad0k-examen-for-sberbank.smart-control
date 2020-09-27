const express = require('express')
const router = express.Router()
const controller = require('../controllers/buttons')

router.get('/:idHouse/:idRoom', controller.actionButtonsState) // get state for rooms
router.post('/', controller.actionAddButton) // add house to list
router.delete('/:idHouse/:idRoom', controller.actionRemoveButton) // remove house
router.patch('/', controller.actionChoseButton) // chose house

module.exports = router;