const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
    try {
        let queryStr = JSON.stringify(req.query)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        const tours = await Tour.find(JSON.parse(queryStr))
        res.json(tours)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)
        tour ? res.send(tour) : res.status(404).json({ status: 'not found' })
    } catch (error) {
        res.status(404).send(error)
    }
}

exports.createTour = async (req, res) => {
    try {
        const tour = await Tour.create(req.body)
        res.status(201).json(tour)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.send(tour)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id)
        res.status(204).json({ status: 'deleted' })
    } catch (error) {
        res.status(400).send(error)
    }
}
