// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api/:id/:message", (req, res) => {
    res.json({ message: `Hello from server! ${req.params.id} ${req.params.message}`});
});
