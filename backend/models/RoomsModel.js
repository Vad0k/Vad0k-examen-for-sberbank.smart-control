const SmartHousesModel = require("./SmartHousesModel");
const {Sequelize, Model, DataTypes} = require("sequelize");
const {sequelize} = require("../database/connector")

class RoomsModel extends Model {}

RoomsModel.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    tableName: 'rooms',
    modelName: 'RoomsModel', // We need to choose the model name
    createdAt: false, // I don't want createdAt
    updatedAt: false, // I don't want updatedAt
})

//RoomsModel.belongsTo(SmartHousesModel, {foreignKey : 'id'})

module.exports = RoomsModel