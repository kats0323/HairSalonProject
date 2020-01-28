const express = require("express");
const connectDB = require("./config/db")
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


// connect data base

connectDB();

const PORT = process.env.PORT || 5000;

// init middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/public', express.static('public'));

app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));

const priceRouter = require('./routes/prices');
const aboutRouter = require('./routes/about');
const photoRouter = require('./routes/photo');
const blogRouter = require('./routes/blogs');
const contactRouter = require('./routes/contacts');
const locationRouter = require('./routes/location');
const cutRouter = require('./routes/cut');
const permRouter = require('./routes/perm');
const colorRouter = require('./routes/color');


app.use('/prices', priceRouter);
app.use('/about', aboutRouter);
app.use('/photos', photoRouter);
app.use('/blogs', blogRouter);
app.use('/contacts', contactRouter);
app.use('/locations', locationRouter);
app.use('/cut', cutRouter);
app.use('/perm', permRouter);
app.use('/color', colorRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })
}

app.listen(PORT, () => {
    console.log(`Server started on PORT${PORT}`)
})

