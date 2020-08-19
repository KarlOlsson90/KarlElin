const { Router } = require("express");

const controller = require('../controllers/controller')
const router = new Router()


//GET
router.get('/test', (req,res) => {
    res.send('testet')
})

//POST
router.post('/inlagg', );

//PUT
router.put('/redigera/:id/', controller.putCallback)

//DELETE
router.delete('/radera/:id/', function (req, res) {

    db.remove({ _id: req.params.id}, {})

    res.json("req.params.id togs bort")
    db.remove({koppling: req.params.id}, {multi: true})



  })

  router.post('/kommentar/:objektkoppling', function(req, res, next) {

    objektet = {
        "text": req.body,
        "koppling": req.params.objektkoppling
    }

    db.insert(objektet, function(error, newdoc) {


        res.json(objektet + " lades till!")
    })

});

module.exports = router