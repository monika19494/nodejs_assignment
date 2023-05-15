const express = require("express");
const app = express();
const router = express.Router();
const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Hello World");
});


app.post("/", (req, res) => {
    res.send("hello world")
})

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status:error.status || 500,
            message: error.message || "server error",
        },
    });
});
  


app.listen(PORT, () => {
   console.log("Server running at 3000")
});