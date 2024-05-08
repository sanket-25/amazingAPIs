const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://2022sanketdhuri:WKm6WEKmHe80Mgql@cluster0.91iy5uo.mongodb.net/iot';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(express.json());

app.use('/', routes);

app.post('/send-message', async (req, res) => {
    try {
        const url = 'https://xlz593.api.infobip.com/whatsapp/1/message/template';
        const headers = {
            'Authorization': 'App 8a607896aba23e0e7a95e50738d10977-825dbc64-760e-41bb-b99f-c9214d5c5139',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const data = {
            messages: [{
                from: '447860099299',
                to: '919702439076',
                messageId: '8ebf9c00-02e3-4ecd-af7c-de43ba0630b6',
                content: {
                    templateName: 'message_test',
                    templateData: {
                        body: {
                            placeholders: ['SANKET']
                        }
                    },
                    language: 'en'
                }
            }]
        };

        const response = await axios.post(url, data, { headers });
        console.log(response.data);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

