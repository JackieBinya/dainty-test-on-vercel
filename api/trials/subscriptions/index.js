const stripe = require("stripe")(process.env.STRIPE_SK)

const corePlanPriceID = "price_1IVImBF5dr8554IROIgLmOEH"

module.exports = async (req, res) => {
    await stripe.subscriptions.create({
      customer: req.body.id,
      items: [
        {
          price: corePlanPriceID,
        },
      ],
      trial_period_days: 15,
    })

    res.send({status: "success"})
}
