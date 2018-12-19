const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user_schema = new schema({
    google_id: String,
    facebook_id: String
});



mongoose.model("user", user_schema);