/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const hits = [
  { objectID: 1, title: "Google", url: "http://google.ca" },
  { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
];

const alfonso = [
  {
    mammal_id: 1,
    mammal_name: "Alfonso",
    age: 4,
    weight: 6.2,
    bio:
      "Employees of the Mowi salmon farm spotted Alfonso swimming irregularly in waters near Hardwicke Island. She was observed unable to dive and floating sideways.",
    date_admitted: "2020-12-25",
    date_released: null,
    profile_pic: "https://dqgt5bdmzyj47.cloudfront.net/wp-content/uploads/2020/07/DSC05570.jpg", //"docs/seals/alfonso.jpg",
    event_id: 12,
    admin_id: 1,
    sponsored: true,
  },
];

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

    db.query(`SELECT * FROM mammals;`)
      .then(data => {
        const mammals = data.rows;
        res.json({ mammals });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    // res.json({ alfonso });

  });
  //  WORK IN POROGRESS TO BE COMPLETED
  router.get("/unsponsored", function (req, res, next) {
    let query = `SELECT * FROM mammals WHERE sponsored=false`;
    // db.query to get unsponsored mammals
    db.query(query)
      .then((data) => {
        const mammals = data.rows;
        console.log("---------------------->",mammals);
        res.json({ mammals });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    // res.json("API showing unsponsored mammal");
  });


  router.get("/:id", function (req, res, next) {
    // db.query to go here to get individual mammal
    // note should return an object not a string
    res.json("API showing individual mammal");
  });

  router.get("/:id/:url", function (req, res, next) {
    // db.query to go here to get videos linked to each mammal
    res.json("API showing video feed for each associated mammal");
  });
  // localhost/api/mammals/id/events_id
  router.get("/:id/events", function (req, res, next) {
    // db.query to go here to get events linked to each mammal
    res.json("API showing events for specific mammal");
  });


  return router;
};
