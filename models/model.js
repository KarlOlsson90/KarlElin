const db = require('../database/database')

module.exports = { 
    upd(id, body) {
        
        db.update({ _id: id}, {title: body.title, content: body.content},{})
        
    }, 
    pst(body) {
        
        
        db.findOne({ title: body.title }, function (err, doc) {
            console.log(doc)
            if (doc) {
                    console.log("finns!")
                    
            } else {
                console.log("finns inte!")
                db.insert(body, function(err, newDoc){})
            }
            
        })
        
    },
    dlt(id) {

        db.remove({ _id: id}, {}, function(err, numRemoved){})
    }


    


}