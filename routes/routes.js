const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.get('/hi', (req, res) => {
    res.json({ "hi": "hello" });
});

router.get('/data', dataController.getAllData);

module.exports = router;
