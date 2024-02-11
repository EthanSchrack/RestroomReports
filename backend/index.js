const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
var ObjectId = require('mongodb').ObjectId; 
const cors = require('cors') 

const app = express();
app.use(express.json());
const corsOptions = {
    origin: '*'
  };
  app.use(cors(corsOptions));

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
    
    const body = req.body;
    console.log(body);

    let fail = false;

    ['name', 'description', 'image', 'latitude', 'longitude'].forEach(prop => {
        if (!body[prop]) {
            if (fail) {
                return;
            }
            res.send(`Missing required property: ${prop}`).status(400);
            fail = true;
            return;
        }
        
    });

    const document = {
        id: uuidv4(),
        name: body.name,
        description: body.description,
        image: body.image,
        rating: 0.0,
        latitude: parseFloat(body.latitude),
        longitude: parseFloat(body.longitude)
    }

    const result = await collection.insertOne(document);
    if (fail) {
        return;
    } else {
        result.insertedId ? res.send({bathroom_id: document.id}).status(200) : res.status(500).send();
    }


});

app.get("/details", async (req, res) => {
    const collection = await db.collection("Bathrooms");
    const body = req.body;
    console.log(body);
    console.log(req.query.id);
    const id = req.query.id;

    if (!id) {
        res.send("Missing bathroom ID").status(400);
        return;
    }

    const result = await collection.findOne({"id": id});
    res.send(result);   

});

app.put("/update-bathroom", async (req, res) => {
    const collection = await db.collection("Bathrooms");
    const body = req.body;

    const id = body["id"];

    if (!id) {
        res.send("Missing bathroom ID").status(400);
        return;
    }
    const updates = [];

    ['name', 'description', 'image', 'rating', 'latitude', 'longitude'].forEach(prop => {
        if (body[prop]) {
            updates.push({[prop]: body[prop]});
        }
    });

    let merged = {}
    updates.forEach(update => {
        Object.assign(merged, update);
    });
    console.log(merged);

    const updateResult = await collection.updateOne(
        {id: id},
        {$set: merged}
    );

    if (updateResult.matchedCount == 0) {
        res.send("A bathroom with that ID does not exist").status(400);
        return;
    }
    res.status(200).send({"id": id, "updated": merged});


}); 


app.delete("/delete-bathroom", async(req, res) => {
    const collection = await db.collection("Bathrooms");
    const id = req.query.id;
    res.set('Access-Control-Allow-Origin','*');
    if (!id) {
        res.send("Missing bathroom ID").status(400);
        return;
    }

    const result = await collection.deleteOne({"id": id});

    if (result.deletedCount == 0) {
        res.send("A bathroom with that ID does not exist").status(400);
        return;
    }
    res.status(200).send({"id": id, "deleted": true});

});



start().catch(console.dir);
