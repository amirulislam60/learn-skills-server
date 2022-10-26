const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/catagory.json');

app.get('/', (req, res) => {
    res.send('Online courses API')
});

app.get('/courses-category', (req, res) => {
    res.send(category)
})

app.listen(port, () => {
    console.log('Learn Skills with practice server on port', port);
})