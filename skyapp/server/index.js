// Section 1
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

// Section 2
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(cors());
app.get('/summary', (req, res) => {
    axios.get('https://api.bittrex.com/v3/markets/summaries')
        .then(response => {
            res.send(response.data);
         });
});

// Section 4
app.listen(3000, () => {
    console.log('server started on port 3000');
});