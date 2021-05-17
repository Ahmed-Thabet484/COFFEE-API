const express = require('express');
const app = express();
const hanlder = require('./handler/handler');

// Define port in evnironement variables 
// If not defined then the default port is 3000
const port = process.env.PORT || 3000

app.get('/api/getProductDetails', function (req, res) {
    let body = hanlder.getDetails(req);
    res.send({ body });
});

app.listen(port, () => console.log(`Listening to port ${port}...`));


