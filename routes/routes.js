const { Router } = require("express");

const controller = require('../controllers/controller')
const router = new Router()


//GET
router.get('/test', controller.getCallback)

//POST
router.post('/inlagg', controller.postCallback);

//PUT
router.put('/redigera/:id/', controller.putCallback)

//DELETE
router.delete('/radera/:id/', controller.deleteCallback)

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