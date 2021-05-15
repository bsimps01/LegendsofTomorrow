const express = require('express')
const Legend = require('../models/post.js')
const router = express.Router();

// module.exports = (router) => {
    // CREATE

    // Get all legends
    router.get('/', (req, res) => {
        Legend.find()
          .then(legends => {
             return res.json({ legends });
          })
          .catch(err => {
            console.log(err.message);
          })
      })
      // POST new legend
      router.post("/", (req, res) => {
        const newLegend = new Legend (req.body)
        console.log(newLegend)
  
        newLegend.save((err, newLegend) => {
            if(err) console.log(err)
              // REDIRECT
              console.log(err)
              console.log(newLegend)
              return res.json({
                  message: '${newLegend.title} submitted',
              })
        })
        
      });

      // GET specific legend info
    router.get("/:id", (req, res) => {
        Legend.findById(req.params.id)
        .then((legendFound) => {
            return res.json({ legendFound });
        })
        .catch((err) => {
            throw err.message;
        });
    });

// Update existing legend info
router.put("/:id", (req, res) => {
    Legend.findById(req.params.id)
      .then((ogLegend) => {
        return ogLegend;
      })
      .then((ogLegend) => {
        Legend.findByIdAndUpdate(req.params.id, req.body)
          .then(() => {
            return Legend.findOne({ title: req.body.title });
          })
          .then((updatedLegend) => {
            return res.json({
              message: "Legend updated.",
              title: `${ogLegend.title} -> ${updatedLegend.title}`,
              img: `${ogLegend.img} -> ${updatedLegend.img}`,
              summary: `${ogLegend.summary} -> ${updatedLegend.summary}`,
              sport: `${ogLegend.sport} -> ${updatedLegend.sport}`,
            });
          })
          .catch((err) => {
            throw err.message;
          });
      });
  });

    // Delete existing legend
router.delete("/:id", (req, res) => {
    Legend.findByIdAndDelete(req.params.id)
      .then((result) => {
        if (result === null) {
          return res.json({ message: "No ID matches Legend" });
        } else {
          return res.json({ message: "Legend deleted." });
        }
      })
      .catch((err) => {
        throw err.message;
      });
  });
//   };
module.exports = router;