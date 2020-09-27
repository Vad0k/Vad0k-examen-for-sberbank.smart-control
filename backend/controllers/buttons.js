const SmartHousesModel = require('../models/SmartHousesModel');
const ButtonsModel = require("../models/ButtonsModel");
const {sequelize} = require('../database/connector')

module.exports.actionButtonsState = async (req, res) => {

    const idHouse = req.params.idHouse
    const idRoom = req.params.idRoom
    if (isNaN(Number(+idHouse+idRoom))) return res.json({error: 'Переданы не числа'})

    const json = {
        buttons: {}
    }

    await SmartHousesModel.findAll({
        where: {
            id_house: idHouse,
            id_room: idRoom,
        },
        include: [{
            model: ButtonsModel,
            as: 'b',
            required: false
        }]
    }).then(data => {
        console.log(data)
        data.forEach(item => {
            json.buttons[item.b.id] = {
                type: item.b.type,
                action: item.b.action,
                title: item.b.title,
                description: item.b.description,
                defaultValue: item.b.defaultValue,
                value: item.value,
                isCustom: item.b.is_custom,
            }
        })
    }).catch(e => {
        return res.json({
            error: e.toString()
        })
    })

    return res.json(json)
}

module.exports.actionAddButton = async (req, res) => {

}
module.exports.actionRemoveButton = async (req, res) => {

}
module.exports.actionChoseButton = async (req, res) => {

}