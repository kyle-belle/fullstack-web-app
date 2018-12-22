const mongoose = require("mongoose");
const schema = mongoose.Schema;

const recipient_schema = new schema({
    email: String,
    responded: {type: Boolean, default: false}
});



module.exports = recipient_schema;