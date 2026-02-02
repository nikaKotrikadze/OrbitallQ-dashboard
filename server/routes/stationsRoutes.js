const express = require("express");
const router = express.Router();
const {
  getStations,
  postStation,
  updateWorkout,
  deleteStation,
} = require("../controllers/stationsController.js");

router.get("/", getStations);
router.post("/", postStation);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteStation);

module.exports = router;
