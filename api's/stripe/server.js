require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
  [1, { priceInCents: 2000, name: "Fancy Hat" }],
  [2, { priceInCents: 3000, name: "Fancy Shoes" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((items) => {
        const storeItem = storeItems.get(items.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: items.quantity,
        };
      }),
      success_url: `${process.env.SERVER_URL}/sucess.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000");
});
