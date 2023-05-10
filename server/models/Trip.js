const { db } = require("./index");

module.exports = (sequelize, DataTypes) => {
    console.log(db);
    return sequelize.define('Trips', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        startTime: {
            type: DataTypes.DATE,
        },
        endTime: {
            type: DataTypes.DATE,
        },
        noOfPassengers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
        }
    }, {
        paranoid: true, timestamps: true, underscored: true
    });
};