const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


const uri = process.env.DB_URI;
const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

async function run() {
    try {
        await client.connect();
        console.log('MongoDB Database conected!');

    } catch (error) {
        console.log(error.name, error.message, error.stack);
    }
}
run();

app.get('/', (req, res) => {
    res.send('This server is up and running');
})
app.listen(port, () => {
    console.log(`This server is running on port: ${port}`);
})