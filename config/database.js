const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once("connected", () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
