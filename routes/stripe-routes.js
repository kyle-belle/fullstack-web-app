const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripe_secret_key);
const login = require("../middleware/login");

module.exports = (app) => {
    app.post("/api/stripe", login, async (req, res) => {
        // console.log(req.body);

        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id,
            description: "charge for 5 surmail credits",
        });

        // console.log(charge);

        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
}