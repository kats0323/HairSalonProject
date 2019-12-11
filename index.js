const express = require("express");
const connectDB = require("./config/db")
const cors = require('cors');
const app = express();
// connect data base
connectDB();

const PORT = process.env.PORT || 5000;

// init middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"))
app.use("/users", require("./routes/users"));

const pricesRouter = require('./routes/prices');
const aboutRouter = require('./routes/about');


app.use('/prices', pricesRouter);
app.use('/about', aboutRouter);


app.listen(PORT, () => {
    console.log(`Server started on PORT${PORT}`)
})