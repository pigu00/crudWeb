const express = require("express");
const router = express.Router();
const { getAllCars, postOneCar, getCarById_get, getCarById, deleteCarById } = require("../controllers/crud.controller");

router.get("/inventario", getAllCars);
router.post("/addCars.html", postOneCar);
router.get("/findIdCars", getCarById_get);
router.post("/findIdCars", getCarById);

router.post("/inventario/:id", deleteCarById)

module.exports = router;
