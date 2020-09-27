const RoomsModel = require("./RoomsModel");
const HousesModel = require("./HousesModel");
const ButtonsModel = require("./ButtonsModel");

const {Sequelize, Model, DataTypes} = require("sequelize");
const {sequelize} = require("../database/connector")

class SmartHousesModel extends Model {}

SmartHousesModel.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_house: { type: DataTypes.INTEGER, allowNull: true },
    id_room: { type: DataTypes.INTEGER, allowNull: true },
    id_button: { type: DataTypes.INTEGER, allowNull: true },
    value: { type: DataTypes.STRING, allowNull: true },
}, {
    sequelize,
    tableName: 'smart_houses',
    modelName: 'SmartHousesModel', // We need to choose the model name
    createdAt: false, // I don't want createdAt
    updatedAt: false, // I don't want updatedAt
})

SmartHousesModel.belongsTo(RoomsModel, {foreignKey : 'id_room', as: 'r'})
//SmartHousesModel.belongsTo(HousesModel, {foreignKey : 'id_house', as: 'h'})
SmartHousesModel.belongsTo(ButtonsModel, {foreignKey : 'id_button', as: 'b'})


module.exports = SmartHousesModel