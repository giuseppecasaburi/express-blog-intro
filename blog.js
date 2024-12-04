const express = require("express");
const app = express();
const port = 3000;
const postsArray = require("./data/dataBlog");

app.use(express.static("pubblic"));

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
    res.json({
        posts: postsArray,
        length: postsArray.length
    });
})

app.listen(port, () => {
    console.log("Il server è parito");
});