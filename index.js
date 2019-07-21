const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("my name is lewenei aron!"));

app.listen(9000, () => console.log("App listening on port 9000"));