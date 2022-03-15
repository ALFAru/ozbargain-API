const express = require("express");
const app = express();
const { connectDB, getDeals } = require("./database/mongo");
connectDB();

app.get("/api/deals/:score", async (req, res) => {
  const score = parseInt(req.params.score);
  if (!score) res.status(400).send("Bad request...");
  else {
    console.log("Get is here");
    const deals = await getDeals(score);
    res.send(deals);
  }
});

app.get("/", (req, res) => {
  res.send("Helloo world");
});

// async function run() {
//   await connectDB();
//   const deals = await getDeals(8);
//   console.log(deals);
//   //const deals =
// }

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

//run();
