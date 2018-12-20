const express = require("express"); //node's silly way of doing imports
const cookie_session = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const parser = require("body-parser")

require("./db-models/users");
require("./services/passport");

mongoose.connect(keys.mongodb_link, {useNewUrlParser: true});//connects to mongo database

const app = express(); //creates an express app returning a super-object of sorts

app.use(parser.json());
app.use(cookie_session({
    maxAge : 30 *24 * 60 * 60 * 1000,
    keys: [keys.cookie_key]
}));

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => { //handler for get request to said directory
//     res.send({hello: 'world'});
// });

require("./routes/auth-routes")(app);
require("./routes/stripe-routes")(app);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT); //sets up app to listen on port 5000