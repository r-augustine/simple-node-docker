const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const apiRoutes = require("./routes/api");

app.use("/api/v1", apiRoutes);

app.get("/", (req, res) => {
  res.json("this is working");
});

app.get("/test", (req, res) => {
  res.json("this is the test route");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
