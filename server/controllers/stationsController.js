const Stations = require("../model/stationsModel.js");
const mongoose = require("mongoose");

const getStations = async (req, res) => {
  const stations = await Stations.find({}).sort({ createdAt: -1 });
  res.status(200).json(stations);
};

const postStation = async (req, res) => {
  const { stationName, opsRisk, recommendedAction, metrics } = req.body;

  try {
    const station = await Stations.create({
      stationName,
      opsRisk,
      recommendedAction,
      metrics: {
        temperature: metrics.temperature,
        windSpeed: metrics.windSpeed,
        precipitation: metrics.precipitation,
        cloudCover: metrics.cloudCover,
      },
    });

    res.status(200).json(station);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such station" });
  }

  const updatedWorkout = await Stations.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!updatedWorkout) {
    return res.status(404).json({ error: "No such station" });
  }

  res.status(200).json(updatedWorkout);
};

const deleteStation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such station" });
  }

  const deletedStation = await Stations.findOneAndDelete(id);

  if (!deletedStation) {
    return res.status(404).json({ error: "No such station" });
  }

  res.status(200).json(deletedStation);
};

module.exports = { getStations, postStation, updateWorkout, deleteStation };
