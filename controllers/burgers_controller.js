// Dependency
var express = require("express");
var router = express.Router();

var burger = require("../models/burgers");

// Root folder
router.get("/", (req, res) => {
    // console.log(req);
    burger.selectAll(data => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// burger
router.post("/api/hamburger", (req, res) => {
    burger.create("burger_name", req.body.burger_name, result => {
        res.json({id: result.insertId});
    });
});

// burger/id
router.put("/api/hamburger/:id", (req, res) => {

    var burgerId = req.params.id;
  
    burger.update(burgerId, result => {
      if (result.changedRows == 0) {

        // If no rows were changed, then 404
        return res.status(404).end();

      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;