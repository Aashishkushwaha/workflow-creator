const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use("/api/users/", require("./routes/Users"));
app.use("/api/workflow/", require("./routes/Workflow"));

const db = mongoose.connection;

mongoose
  .connect("mongodb://localhost:27017/workflow-tophire", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}\nConnected to DB...`);
    });
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Hello");
});
