const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user_schema = new schema({
    google_id: String,
    facebook_id: String,
    credits: {type: Number, default: 0}
});



mongoose.model("user", user_schema);