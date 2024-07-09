const express = require('express');
const bookingController = require('../../controllers/booking.controller');
const router = express.Router();

const {catchAsync}=require('../../utils/catchAsync');

router.post('/',catchAsync(bookingController.sendbooking));

module.exports = router;