const { Sequelize } = require('sequelize');
const driverModel = require('./Driver');
const carModel = require('./Car');
const tripModel = require('./Trip');
const { dbVars } = require('../config/env.config');

const sequelize = new Sequelize(dbVars.database, dbVars.user, dbVars.password, {
    host: dbVars.host,
    dialect: 'postgres',
    logging: console.log,
    logQueryParameters: true,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.driverModel = driverModel(sequelize, Sequelize);
db.carModel = carModel(sequelize, Sequelize);
db.tripModel = tripModel(sequelize, Sequelize);

db.carModel.hasMany(db.tripModel);
db.tripModel.belongsTo(db.carModel);
db.driverModel.hasMany(db.tripModel);
db.tripModel.belongsTo(db.driverModel);

module.exports = { db };