const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const uri = "mongodb+srv://wstewart7972:agDfKNdmbACGxx6n@bathroomreports.oxh4tgb.mongodb.net/?retryWrites=true&w=majority";
const PORT = 8080;


let db; 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function start() {
    await client.connect();
    db = await client.db("BathroomReports");
    console.log("Connected to mongo");

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    });
}
    

  


app.get("/bathrooms", async (req, res) => {
    try {
        const collection = await db.collection("Bathrooms");
        const results = await collection.find({}).toArray();
        res.json(results);
    } catch {
        res.status(500).send();
    }
});

app.post("/add-bathroom", async (req, res) => {
    const collection = await db.collection("Bathrooms");
    
    const document = req.body;

    ['name', 'description', 'image'].forEach(prop => {
        if (!document[prop]) {
            res.send(`Missing required property: ${prop}`).status(400);
        }
    })

    const result = await collection.insertOne(document);
    result.insertedId ? res.send({bathroom_id: result.insertedId}).status(200) : res.status(500).send();


});


start().catch(console.dir);
