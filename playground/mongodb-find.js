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

    // collection.find({
    //     _id: new ObjectID('5feaf65e350361120ca983cd')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // collection.find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    usercollection.find({name: 'Lazarus'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.close();
});