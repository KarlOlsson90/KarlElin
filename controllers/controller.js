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

}, deleteCallback: async (req, res) => { 
    try {
        const id = req.params.id
        await model.dlt(id)
        res.json("Det gick bra")
    } catch(error) {
        res.json("NEJ")
    }

}, getCallback: (req, res) => {
    res.send("hej")
}

}

