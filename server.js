const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Support for JSON encoded bodies
app.use(bodyParser.text()); // Support for plain text bodies

app.post('/swift_fiat', (req, res) => {
    // Process the incoming SWIFT message
    console.log(req.body);
    // Here you would convert funds to USDT

    res.status(200).send('Transaction processed successfully');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
