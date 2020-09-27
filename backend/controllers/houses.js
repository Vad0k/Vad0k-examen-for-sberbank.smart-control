const HousesModel = require('../models/HousesModel')

module.exports.actionHousesState = async (req, res) => {

    const json = {
        idAction: "-1",
        houses: {}
    }
    await HousesModel.findAll().then(data => {
        data.map((item, i) => {
            let row = item.dataValues;
            if (i === 0) json.idAction = row.id
            json.houses[row.id] = {
                title: row.title,
                sort: 0
            }
            console.log(row, json);
        })
    }).catch(e => {
        json.error = e.toString()
    })

    return res.json(json)
}

module.exports.actionAddHouse = async (req, res) => {
    await HousesModel.create({
        title: req.body.title,
        is_active: false
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
module.exports.actionRemoveHouse = async (req, res) => {
    await HousesModel.update({title: req.body.title}, {
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
    await HousesModel.update({is_active: false}).then(() => {
        return HousesModel.update({is_active: true}, {
            where: {
                id: req.body.id
            }
        })
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