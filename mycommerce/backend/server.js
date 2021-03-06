import express from "express";
import data from "./data.js";

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send(`Server is listening on port ${port}`);
});
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
