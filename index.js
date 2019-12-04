const express = require("express");
const connectDB = require("./config/db")
const app = express();
// connect data base
connectDB();

const PORT = process.env.PORT || 5000;

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"))
app.use("/users", require("./routes/users"));

app.listen(PORT, () => {
    console.log(`Server started on PORT${PORT}`)
})