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
  router.get("/", (req, res) => {
    // let query = `SELECT * FROM widgets`;
    // console.log(query);
    // db.query(query)
    //   .then(data => {
    //     const widgets = data.rows;
    //     res.json({ widgets });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });
    res.json({serah})
  });
  return router;
};
