const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: "localhost",
    user: "foo",
    password: "password",
    database: "fast_foods"
});
          

app.get("/api/food", (req, res) => {
    pool.query("SELECT id, name FROM food", (error, rows) => {
        if (error) {
             return res.status(500).json({ error });
        }

         res.json(rows);
    });
});
        
app.listen(9000, () => console.log("App listening on port 9000"));