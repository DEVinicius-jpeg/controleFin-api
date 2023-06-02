const Payments = require("../models/payments");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require('../errors/custom-error')

const getAllPayments = asyncWrapper(async (req, res) => {
    const payments = await Payments.find({})
    res.status(200).json({ payments })
})
  
const createPayments = asyncWrapper(async (req, res) => {
    const payments = await Payments.create(req.body)
    res.status(201).json({ payments })
})
  
const getPayments = asyncWrapper(async (req, res, next) => {
    const { id: payID } = req.params
    const payments = await Payments.findOne({ _id: payID })
    if (!payments) {
        return next(createCustomError(`No task with id : ${payID}`, 404))
    }
  
    res.status(200).json({ payments })
})

const deletePayments = asyncWrapper(async (req, res, next) => {
    const { id: payID } = req.params
    console.log(payID);
    const payments = await Payments.findOneAndDelete({ _id: payID })
    if (!payments) {
        return next(createCustomError(`No task with id : ${payID}`, 404))
    }
    res.status(200).json({ payments })
})

const updatePayments = asyncWrapper(async (req, res, next) => {
    const { id: payID } = req.params

    const payments = await Payments.findOneAndUpdate({ _id: payID }, req.body, {
        new: true,
        runValidators: true,
    })
  
    if (!payments) {
      return next(createCustomError(`No task with id : ${payID}`, 404))
    }
  
    res.status(200).json({ payments })
})
  
  module.exports = {
    getAllPayments,
    createPayments,
    getPayments,
    updatePayments,
    deletePayments,
}
  