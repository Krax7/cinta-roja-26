const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.get('/',(req, res) => {
    res.send(
        {
        message: 'Lo hemos logrado /o/'
        }
    );
});

app.listen(
    PORT, () => {
        console.log(`Server on port ${ PORT }`);
});