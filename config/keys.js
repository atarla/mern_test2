const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://anusha:password-1@spa-77jow.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: 'mongodb+srv://anusha:password-1@spa-77jow.mongodb.net/test?retryWrites=true&w=majority'
}
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("testdb").collection("testcollection");
    // perform actions on the collection object
    client.close();
});
