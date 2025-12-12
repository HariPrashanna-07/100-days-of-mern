//Simple MongoDb CRUD operations Example
const {MongoClient, ObjectId}=require('mongodb');

//MongoDb connnection URL and Database name
const url='mongodb://localhost:27017/';  //your mongodb URL
const dbName='database1'; //your database name
const collectionName='users';  //your collection name

//Create a new MongoClient
const client= new MongoClient(url);
async function main(){
    try{
        //connect to Mongodb
        await client.connect();
        console.log('Connected successfully to MongoDb');

        const db=client.db(dbName);
        const collection=client.collection(collectionName);

        //Create (Insert/Write data)
        console.log('\n----INSERT OPERATION----');
        const newuser={name:'John Snow',email:'johnsnow@gmail.com',age:23};
        const innerresult=await collection.insertOne(newuser);
        console.log('Insert document: ',innerresult.insertedId);

         //Insert multiple Document
        const multipleuser=[{name:'John Snow',email:'johnsnow@gmail.com',age:23},
            {name:'jane Smith',email:'janesmith@gmail.com',age:25},
            {name:'Bob Johnson',email:'bobjohnson@gmail.com',age:24}];
        const innerresult1=await collection.insertOne(newuser);
        console.log('Insert document: ',innerresult1.insertedId);

    }
}