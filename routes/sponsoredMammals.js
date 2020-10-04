const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM sponsors_mammals;`)
      .then((data) => {
        // console.log("This is events query data...*****....",data);
        const sonsoredMammals = data.rows;
        res.json({ sonsoredMammals });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });

    // res.json({ litterPick });
  });

  router.post("/:mammal_id", (req, res) => {
    // db insert query required for creating events
    // below protects agans sql injection
    let query = `
      INSERT INTO sponsors_mammals(mammal_id, sponsor_id)
      VALUES($1, 1);
    `;
    db.query(query, [req.params.mammal_id])
      .then((data) => {
        const sonsoredMammals = data.rows;
        res.json({ sonsoredMammals });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
