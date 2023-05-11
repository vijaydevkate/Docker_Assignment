const { Router } = require('express');
const {
  driverDetails,
  driverTripDetails,
  listDrivers,
  listDriverTrips,
} = require('../controllers/driver');

const router = Router();
router.get('/', listDrivers);
router.get('/:driverId', driverDetails);
router.get('/:driverId/trip', listDriverTrips);
router.get('/:driverId/trip/:tripId', driverTripDetails);

module.exports = { router };
