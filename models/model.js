const db = require('../database/database')

module.exports = { 
    upd(id, body) {
        
        db.update({ _id: id}, {title: body.title, content: body.content},{})
        
    }, 
    pst(body) {
        db.insert(body, function(err, newDoc){})
    },
    dlt(id) {

        db.remove({ _id: id}, {}, function(err, numRemoved){})
    }


    


}