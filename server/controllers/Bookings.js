import express from 'express';
import Booking from '../models/Booking.js'
import mongoose from 'mongoose';

const router = express.Router();

export const getBookings = async (req, res) => {
    try {
        const booking = await Booking.find();
        console.log(Booking);
        res.status(200).json(booking);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createBooking = async (req, res) => {
    const booking = req.body;
    const newBooking = new Booking(booking);
    try {
        await newBooking.save()
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateBooking = async (req, res) => {
    const { id: _id } = req.params;
    const booking = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Booking with that id');

    const updatedBooking = await Booking.findByIdAndUpdate(_id, { ...booking, _id }, { new: true });

    res.json(updatedBooking);
}

export const deleteBooking = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Booking with that id');

    await Booking.findByIdAndRemove(id);

    res.json({ message: 'Booking deleted successfully '});
}

export default router;