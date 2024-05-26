const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/add-product', (req, res) => {

    res.redirect('http://localhost:3001/add-product');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
