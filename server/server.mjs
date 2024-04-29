import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3000;

const client = new MongoClient("mongodb://aafdbUser:black@localhost:27017/aafdb");
const db = client.db('aafdb');
const inv = db.collection('inv');
const loc = db.collection("loc");
const transfer = db.collection("transfers");

client.connect();

app.use(express.static('../dist'));
app.use(express.json());




app.use((req, res, next) => {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  console.log(`Body: ${JSON.stringify(req.body)}`);
 
  next();

})
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
  next();
})

app.post('/submitPart', async (req, res) => {
  try {
    const response = await inv.insertOne(req.body);
    console.log("response",response);
    if (response.acknowledged) {
      res.status(201).json({ message: "Part Added" });
      
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ message: "Part Already Exists" });
    } else {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    }
  }
});
/*
app.post("/submitLocation", async (req, res) => {
  try {
    const response = await loc.insertOne(req.body);
    if (response.acknowledged) {
      res.status(201).json({ message: "Location Added" });
      
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).json({ message: "Location Already Exists" });
    } else {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});
*/
app.get('/parts', async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
    const docCount = await inv.countDocuments();
    if (docCount === 0) {
      console.log("Database is empty");
      res.status(404).json({ message: "Database is empty" });
      return;
    } else if (docCount > 0) {
      console.log("Database has data");
    const partsArray = await inv.find().toArray();
    res.json(partsArray);
    // need to redirect to somewhere here
    
    }
  
});

app.get("/part/:id", async (req, res) => {
  console.log("get part by id")
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
    const objectId = new ObjectId(req.params.id);
    const part = await inv.findOne({ _id: objectId });
    if (part) {
      res.json(part);
    } else {
      res.status(404).json({ message: "Part not found" });
    }
});

app.get('/locations', async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
    const docCount = await loc.countDocuments();
    if (docCount === 0) {
      console.log("Location Database is empty");
      res.status(404).json({ message: "Database is empty" });
      return;
    } else if (docCount > 0) {
      console.log("Location Database has data");
    const locationsArray = await loc.find().toArray();
    res.json(locationsArray);
    
    }
  
});

app.get("/location/:id", async (req, res) => {
  console.log("get location by id")
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
    const objectId = new ObjectId(req.params.id);
    const location = await loc.findOne({ _id: objectId });
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ message: "Location not found" });
    }
})



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
