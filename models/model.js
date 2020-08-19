const db = require('../database/database')

module.exports = { 
    test(id, body) {
        console.log("test körs")
        db.update({ _id: id}, {title: body.title, content: body.content},{})
        console.log("test är klar")
    }

    


}