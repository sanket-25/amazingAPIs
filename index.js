const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = 'mongodb+srv://2022sanketdhuri:WKm6WEKmHe80Mgql@cluster0.91iy5uo.mongodb.net/iot';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a mongoose schema for your data
const dataSchema = new mongoose.Schema({
    // Define your schema fields here
    field1: String,
    field2: Number,
    // Example fields, replace with your actual schema
});

// Define a mongoose model based on the schema
const Data = mongoose.model('Data', dataSchema);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/hi', (req, res) => {
    res.json({ "hi": "hello" });
});

// GET request to fetch data from MongoDB
app.get('/data', (req, res) => {
    // Find all documents in the Data collection
    Data.find({}, (err, data) => {
        if (err) {
            console.error('Error fetching data from MongoDB:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Send the fetched data as a JSON response
            res.json(data);
        }
    });
});
