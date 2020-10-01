/*
 * All routes for events are defined here
 */
const litterPick = {
  location: "Woking",
  date_time: "2020-10-15 12:00",
  short_description: "picking up litter to save the animals",
  link: "https://www.google.ca/maps/@49.2994485,-123.1337676,15.25z",
};

const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {

    db.query(`SELECT * FROM events;`)
      .then(data => {
        console.log("This is events query data...*****....",data);
        const events = data.rows;
        res.json({ events });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    // res.json({ litterPick });

  });
  router.get("/:id/map", function (req, res, next) {
    // db.query to go here
    res.json("API is working properly");
  });



  return router;
}
