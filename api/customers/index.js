const stripe = require("stripe")(process.env.STRIPE_SK)

const corePlanPriceID = "price_1IRIwiCD5ZUxyIJEU4jaghEZ"

module.exports = async (req, res) => {
  try {
    const { id } = await stripe.customers.create({
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

    return res.status(200).json({
      status: 200,
      message: "Success",
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: err,
    })
  }
}
