const mongoose = require("mongoose");
const CurrentDeal = require("./schemas/Deal");
const db_url = "mongodb://localhost/ozbargain";

async function getDeals(score) {
  return await CurrentDeal.find({ score: { $gte: score } })
    .sort({ score: -1 })
    .limit(10);
}

async function connectDB() {
  await mongoose
    .connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
}

module.exports = {
  connectDB,
  getDeals,
};
