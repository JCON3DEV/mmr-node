/*
 * All routes for veterinarians are defined here
 */
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // below is the query to return all vet objects
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM veterinarians;`)
    .then(data => {
      const veterinarians = data.rows;
      res.json({ veterinarians });
    })
    .catch(err => {
      res
      .status(500)
      .json({error: err.message});
    })
  })

  return router
}
