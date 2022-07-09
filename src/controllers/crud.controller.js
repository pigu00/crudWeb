const path = require('path')
const read = require("../models/read.model");
const write = require("../models/write.model");


const getAllCars = async (req, res) => {
    const data = await read();
    return res.status(200).json({ data: data });
};


const postOneCar = async (req, res) => {
    const cars = await read();

    console.log(req.body)

    cars.push(req.body)
    await write(cars)
    return res.status(200).json({ message: "database updated" });
}

const getCarById_get = (req, res) => {
    return res.status(200).sendFile(path.resolve("src", "public", "findIdCars.html"))
}

const getCarById = async (req, res) => {
    const cars = await read();
    const foundCar = cars.filter(car => car.id === req.body.id)

    return res.status(200).json({ data: foundCar });
}

const deleteCarById = async (req, res) => {
    const cars = await read();

    const newCars = cars.filter(car => car.id !== req.params.id)

    await write(newCars)
    return res.status(200).json({ data: "Car deleted" });

}

module.exports = { getAllCars, postOneCar, getCarById_get, getCarById, deleteCarById };




