const model = require('../models/model')
const { addListener } = require('process')

module.exports = {  putCallback: (req, res) => {

    const id = req.params.id
    const body = {title: req.body.title, content: req.body.content}

    console.log(id)
    console.log(body)
    model.test(id, body)
    
    //db.update({ _id: req.params.id}, {title: req.body.title, content: req.body.content},{})
    res.json(req.body.title + " ändrades!")

}} 
