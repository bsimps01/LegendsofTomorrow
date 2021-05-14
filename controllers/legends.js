const Post = require('../models/car')
const express = require('express')
const router = express.Router()

module.exports = app => {
    // CREATE
    app.post("/newLegend", (req, res) => {
      const newLegend = new Post (req.body)

      newLegend.save((err, newLegend) => {
          if(err) console.log(err)
          return res.redirect('/')
      })
    })

    app.put('/updateLegend', (req, res) => {

        const legendUpdate = null
        
        Post.find({_id: req.body.ObjectID}, (err, legend) => {
            if(err) console.log(err)
            else legendUpdate = legend
    })

    if(legendUpdate) {
        legendUpdate.body = "talent"
        legendUpdate.save((err, legendUpdate) => {
            if(err) console.log(err)
            return res.json(legendUpdate)
        })
    }
    return res.redirect('/')

})

    app.delete('/deleteLegend', (req, res) => {

        const deleteLegend = null
        
        Post.find({_id: req.body.ObjectID}, (err, legend) => {
            if(err) console.log(err)
            else deleteLegend = legend
    })

    if(deleteLegend) {
        deleteLegend.body = "talent"
        deleteLegend.save((err, deleteLegend) => {
            if(err) console.log(err)
            return res.json(deleteLegend)
        })
    }
    return res.redirect('/')
    })
  };