const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      console.log("Here is the list of drones", drones);
      res.render("drones/list.hbs", { drones });
    })
    .catch((err) => {
      console.log("An error occured while listing all the drones.");
    });
});

// get is only to show the form
router.get("/drones/create-form", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create-form", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create()
    .then((drones) => {
      console.log("Here is the new drone you have created.", drones);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("An error has occured while creating a new drone.");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
