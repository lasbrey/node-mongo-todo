// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log('Unable to Connect to mongodb server');
    }
    console.log('Connected to Mongodb server');

    var collection = db.collection('Todos');

    // collection.insertOne({
    //     text: 'Some random text',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todos', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // collection.insertOne({
    //     name: 'Lazarus',
    //     age: 22,
    //     location: 'My house'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Users', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});