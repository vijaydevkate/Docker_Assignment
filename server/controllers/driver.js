const { db } = require("../models/index");

const listDrivers = async (req, res) => {
    try {
        const drivers = await db.driverModel.findAll();
        return res.json(drivers);
    } catch (error) {
        return res.json(error);
    }
};

const driverDetails = async (req, res) => {
    try {
        const id = req.params.driverId;
        const driverInfo = await db.driverModel.findOne({ where: { id } });
        return res.json(driverInfo);
    } catch (error) {
        return res.json(error);
    }
};

const listDriverTrips = async (req, res) => {
    try {
        const { driverId } = req.params;
        const driverTrips = await db.tripModel.findAll({ where: { DriverId: driverId } });
        return res.json(driverTrips);
    } catch (error) {
        return res.json(error);
    }
};

const driverTripDetails = async (req, res) => {
    try {
        const { driverId, tripId } = req.params;
        const driverTripDetail = await db.tripModel.findOne({ where: { DriverId: driverId, id: tripId }, include: [{ model: db.carModel }] });
        return res.json(driverTripDetail);
    } catch (error) {
        return res.json(error);
    }
};
module.exports = { listDriverTrips, listDrivers, driverTripDetails, driverDetails };