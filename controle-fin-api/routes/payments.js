const express = require("express");
const router = express.Router();

const {
    getAllPayments,
    // createPayments,
    // getPayments,
    // updatePayments,
    // deletePayments,

} = require("../controllers/payments");

router.route('/').get(getAllPayments)
// .post(createPayments)
// router.route('/:id').get(getPayments).patch(updatePayments).delete(deletePayments)

module.exports = router;