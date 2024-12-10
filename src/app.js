const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("namaste shubham");
});

app.listen(3000, () => {
  console.log("server is running successfully on the port 3000");
});
