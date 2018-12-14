const express = require("express"); //node's silly way of doing imports

require("./services/passport");

const app = express(); //creates an express app returning a super-object of sorts

app.get('/', (req, res) => { //handler for get request to said directory
    res.send({hello: 'world'});
});

require("./routes/auth-routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); //sets up app to listen on port 5000