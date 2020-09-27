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

    // db.query(`SELECT * FROM users;`)
    //   .then(data => {
    //     const users = data.rows;
    //     res.json({ users });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });

    res.json({ alfonso });

  });
  return router;
};
