const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); // WE CAN RUN QUERY IN POSTGRES DB

//middleware
app.use(cors());
app.use(express.json()); // for full stack we need to get data from client side

//ROUTES//
// CREATE TODO
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        console.log(description);
        const newTodo = await pool.query(
            "INSERT INTO todo(description) VALUES($1) RETURNING  *",
            [description]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ALL TODOS

//GET A TODO

//UPDATE  A TODO

// DELETE A TODO

app.listen(5000, () => {
    console.log("serever has started on port 5000");
});
