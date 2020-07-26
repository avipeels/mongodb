const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongodbUrl = 'mongodb+srv://avi:cg9M4sv3ay3ZTREv@cluster0.p7eeg.mongodb.net/shop?retryWrites=true&w=majority';

let _db;

const initDb = callback => {
    if (_db) {
        console.log('Database is already initialized');
        return callback(null, _db);
    }
    MongoClient.connect(mongodbUrl)
        .then(client => {
            _db = client.db();
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        })
}

const getDb = () => {
    if (!_db) {
        throw Error('Database is not initialized');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
}