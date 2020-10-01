/*
 * All routes for sponsors are defined here
 * Since this file is loaded in server.js into api/sponsors,
 *   these routes are mounted onto /sponsors
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
    db.query(query)
      .then(data => {
        console.log("This is SELECT AlL FROM SPONSORS DATA", data);
        const sponsors = data.rows;
        res.json({ sponsors });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    // res.json({serah})
  });

  router.get("/:id", (req, res) => {
    // below needs query to select sponsor based on id
    let query = ``;
    // db.query(query)
    //   .then((data) => {
    //     const sponsor = data.rows.id;
    //     res.json({ sponsor });
    //   })
    //   .catch((err) => {
    //     res.status(500).json({ error: err.message });
    //   });
    res.json("API is working properly. Need query for sponsor id search.");
  })

  router.get("/:id/mammals", (req, res) =>{
    // below returns the sponsored mammals based on sponsor id
    console.log("req.params *******", req.params);
    let query = `
    SELECT * FROM sponsors_mammals
    INNER JOIN mammals ON mammals.id = sponsors_mammals.mammal_id
    WHERE sponsor_id = ${req.params.id};
    `;
    db.query(query)
      .then((data) => {
        const mammals = data.rows;
        console.log("this is data --------->", mammals);
        res.json({ mammals });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    // res.json("API is working properly. Need query for mammals based on sponsor id.");
  })


  // Where does the post request go to?
  router.post("/register",(req,res) => {
      // register(req.body[id])
      // .then(function (sponsor) {
      //   // this could return a new spoinsor object or redirct somewhere
      //   // the templateVars would be the data for the ejs
      //   let templateVars = {name: sponsor.name}
      //   redirect("/", templateVars);
      // })
      // .catch(function (error) {
      //   console.log(error);
      //   response.status(400).json({ error: error.message });
      // });
      redirect("/");
  });

  return router;
};
