const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
mongoose.Promise = global.Promise;
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connected")
    }
    catch (err) {
        console.log(err.mssage);
        // exit process failure
        process.exit(1);
    }
}

module.exports = connectDB