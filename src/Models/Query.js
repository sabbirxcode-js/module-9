// Query.js
const mongoose = require('mongoose');

const createCollection = async (collectionName) => {
  await mongoose.connection.db.createCollection(collectionName);
};

const removeCollection = async (collectionName) => {
  await mongoose.connection.db.dropCollection(collectionName);
}

const insertDocument = async (collectionName) => {
    await mongoose.connection.db.collectionName.insertOne( { _id: 10, item: "box", qty: 20 } );
}

const deleteDocument = async (collectionName) => {
    await mongoose.connection.db.deleteOne( { "_id" : ObjectId("563237a41a4d68582c2509da") } );
}