const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Routes();

router.use(authController.protect);

router.get(
  `'/check-session/:tourId',
  bookingController.getCheckoutSession`
);

router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.upadateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
