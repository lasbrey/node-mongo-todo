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

    // deletemany
    // collection.deleteMany({ text: 'help' }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // collection.deleteOne({ text: 'help' }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // collection.findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // deletemany
    usercollection.deleteMany({ name: 'Lazarus' });

    // findOneAndDelete
    usercollection.findOneAndDelete({
        _id: new ObjectID('5fec4a8a86b1a10248ab15d6')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});