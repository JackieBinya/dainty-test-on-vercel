const stripe = require("stripe")(process.env.STRIPE_SK)

const corePlanPriceID = "price_1IVHF9F5dr8554IRZ1W1mOMI"


module.exports = async (req, res) => {
  
   const {id}  = await stripe.customers.create({
      email: req.body.email,
    })

    await stripe.subscriptions.create({
      customer: id,
      items: [
        {
          price: corePlanPriceID,
        },
      ],
      trial_period_days: 15,
    })

    res.send({status: "success"})
}
