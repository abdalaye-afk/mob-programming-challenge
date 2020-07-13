const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/programming", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Database connected > Let's go");
});

mongoose.connection.on("error", () => {
    console.log("Error: Database failed lol");
});
