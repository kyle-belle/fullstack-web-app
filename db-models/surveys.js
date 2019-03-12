const mongoose = require("mongoose");
const schema = mongoose.Schema;
const recipient_schema = require("./recipients");

const survey_schema = new schema({
    title: String,
    subject: String,
    body: String,
    sender: String,
    recipients: [recipient_schema],
    yes: {type : Number, default: 0},
    no: {type : Number, default: 0},
    _user: {type: schema.Types.ObjectId, ref: "user"},
    date_sent: Date,
    last_responded: Date
});



mongoose.model("survey", survey_schema);