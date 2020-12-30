// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log('Unable to Connect to mongodb server');
    }
    console.log('Connected to Mongodb server');

    var collection = db.collection('Todos');
    var usercollection = db.collection('Users');

    collection.findOneAndUpdate({
        _id: new ObjectID('5fecdb4986b1a10248ab15db')
    }, {
        $set: {
            text: 'cow'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    usercollection.findOneAndUpdate({
        _id: new ObjectID('5fec4a9286b1a10248ab15d7')
    }, {
        $set: {
            name: 'lasbrey'
        },
        $inc: {
            age: -2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // findOneAndUpdate

    // db.close();
});