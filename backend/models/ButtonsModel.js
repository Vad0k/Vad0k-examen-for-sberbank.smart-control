const SmartHousesModel = require("./SmartHousesModel");
const {Sequelize, Model, DataTypes} = require("sequelize");
const {sequelize} = require("../database/connector")

class ButtonsModel extends Model {}

ButtonsModel.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    type: { type: DataTypes.INTEGER, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    defaultValue: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    tableName: 'buttons',
    modelName: 'ButtonsModel', // We need to choose the model name
    createdAt: false, // I don't want createdAt
    updatedAt: false, // I don't want updatedAt
    //indexes: [{ unique: true, fields: ['title'] }]
})

module.exports = ButtonsModel