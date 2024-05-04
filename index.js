const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/hi', (req, res) => {
    res.json({ "hi": "hello" });
});
