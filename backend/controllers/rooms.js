const RoomsModel = require('../models/RoomsModel');
const SmartHousesModel = require('../models/SmartHousesModel');
const {sequelize} = require('../database/connector')

module.exports.actionRoomsState = async (req, res) => {

    const idHouse = req.params.idHouse
    if (isNaN(Number(idHouse))) return res.json({error: 'Передано не число'})

    const json = {
        idAction: "1",
        rooms: {}
    }

    await SmartHousesModel.findAll({
        where: {
          id_house: idHouse
        },
        include: [{
            model: RoomsModel,
            as: 'r',
            required: false
        }]
    }).then(data => {
        data.forEach(item => {
            if (item.r.is_active_room) json.idAction = item.r.id
            json.rooms[item.r.id] = {
                title: item.r.title,
            }
        })
    }).catch(e => {
        return res.json({
            error: e.toString()
        })
    })

    return res.json(json)
}

module.exports.actionAddRoom = async (req, res) => {
    await RoomsModel.create({
        title: req.body.title,
    }).then(data => {
        return {
            success: true,
            id: data.id,
        }
    }).catch(e => {
        return res.json({
            success: false,
            error: e.toString()
        })
    })
}
module.exports.actionRemoveRoom = async (req, res) => {
    await RoomsModel.update({title: req.body.title}, {
        where: {
            id: req.body.id
        }
    }).then(data => {
        return {
            success: true
        }
    }).catch(e => {
        return {
            success: false,
            error: e.toString()
        }
    })
}
module.exports.actionChoseHouse = async (req, res) => {
    res.json({
        test:'hhh'
    })
}