/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const serah = {
  sponsor_name: "Serah",
  phone_number: "236 777 3452",
  email: "madeup@gamil.com",
}

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // below shows all sponsor objects
  router.get("/", (req, res) => {
    let query = `SELECT * FROM sponsors`;
    console.log(query);
    db.query(query)
      .then(data => {
        console.log("This is events query data...", data);
        const sponsors = data.rows;
        res.json({ sponsors });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
      console.log("This is events query data...", data);
    // res.json({serah})
  });
  return router;
};
