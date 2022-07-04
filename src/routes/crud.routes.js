const express = require("express");
const router = express.Router();
const { getAllCars, postOneCar, getCarById, deleteCarById } = require("../controllers/crud.controller");

router.get("/inventario", getAllCars);
router.post("/addCars.html", postOneCar);
router.get("/findIdCars.html", getCarById);
router.post("/inventario/:id", deleteCarById)

module.exports = router;
