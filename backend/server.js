const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { MONGO_USER, MONGO_PASSWORD } = require("./config/keys");
const PORT = process.env.PORT || 4500;

// CORS -> Cross-Origin Resource Sharing
// Handling CORS errors
app.use((req, res, next) => {
  // we pass * as second arg because we want to allow access to everyone
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());
app.use("/api/users/", require("./routes/Users"));
app.use("/api/workflow/", require("./routes/Workflow"));
app.use("/api/node/", require("./routes/Node"));

const db = mongoose.connection;

mongoose
  .connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@myclusture-yrmmj.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}\nConnected to DB...`);
    });
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Hello");
});
