require("dotenv").config();
const express = require("express");
const server = express();
const stationsRoutes = require("./routes/stationsRoutes.js");
const mongoose = require("mongoose");

server.use(express.json());
server.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

server.use("/api/stations/", stationsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    server.listen(process.env.PORT, () => {
      console.log(`LISTENING TO http://localhost:${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.error(err);
  });
