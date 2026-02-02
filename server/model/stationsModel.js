const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stationSchema = new Schema(
  {
    stationName: {
      type: String,
      required: true,
    },
    opsRisk: {
      type: String,
      required: true,
    },
    recommendedAction: {
      type: String,
      required: true,
    },
    metrics: {
      temperature: {
        type: Number,
        required: true,
      },
      windSpeed: {
        type: Number,
        required: true,
      },
      precipitation: {
        type: Number,
        required: true,
      },
      cloudCover: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("station", stationSchema);
