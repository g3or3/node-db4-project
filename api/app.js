const express = require("express");

const app = express();

app.use(express.json());
app.use("/api/recipes", require("./recipes/recipesRouter"));

module.exports = app;
