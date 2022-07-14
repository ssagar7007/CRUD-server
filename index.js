import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

app.get('/',(req, res) => {
  res.send('Hello to crud app API')
})

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
//   )
//   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);



const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

