const SmartHousesModel = require("./SmartHousesModel");
const {Sequelize, Model, DataTypes} = require("sequelize");
const {sequelize} = require("../database/connector")

class HousesModel extends Model {}

HousesModel.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    //is_active: { type: DataTypes.BOOLEAN, defaultValue: false}
}, {
    sequelize,
    tableName: 'houses',
    modelName: 'HousesModel', // We need to choose the model name
    createdAt: false, // I don't want createdAt
    updatedAt: false, // I don't want updatedAt
    //indexes: [{ unique: true, fields: ['title'] }]
})

//HousesModel.belongsTo(SmartHousesModel, {foreignKey : 'id'})

module.exports = HousesModel