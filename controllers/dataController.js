const Data = require('../models/data');

exports.getAllData = (req, res) => {
    Data.find({}, (err, data) => {
        if (err) {
            console.error('Error fetching data from MongoDB:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(data);
        }
    });
};
