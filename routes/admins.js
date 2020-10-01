const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.post("/events/:id", (req, res) => {
    // db insert query required for creating events
    // let query = ``;
    db.query(`
      INSERT INTO events(location, date_time, short_description)
      VALUES(value1,value2,value3);
    `)
      .then((data) => {
        const events = data.rows;
        res.json({ events });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  return router
}
