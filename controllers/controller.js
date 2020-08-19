const model = require('../models/model')
const { addListener } = require('process')

module.exports = {  
    putCallback: (req, res) => {

    const id = req.params.id
    const body = {title: req.body.title, content: req.body.content}

    model.upd(id, body)
    res.json(req.body.title + " ändrades!")

}, postCallback: (req, res) => {
    const body = {title: req.body.title, content: req.body.content}

    model.pst(body)
    res.json(req.body.title + " Lades till!")

}, deleteCallback: (req, res) => { 

    const id = req.params.id

    model.dlt(id)
    res.json(req.body.title + "Togs bort !?")

}, getCallback: (req, res) => {
    res.send("hej")
}

}

