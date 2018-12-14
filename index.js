const express = require("express"); //node's silly way of doing imports
const app = express(); //creates an express app returning a kinda super-object

app.get('/', (req, res) => { //handler for get request to said directory
    res.send({hi : 'there'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT); //sets up app to listen on port 5000