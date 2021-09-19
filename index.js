require('dotenv').config();

console.log(process.env.CLIENT_ID);

const express = require('express');
const app = express();




app.get('/',(req,res) => {
    res.send('Hello World!');
});

const port = 8888;
app.listen(port, () => {
    console.log(`Express app listenning at http://localhost:${port}`);
});




