const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/geetansh", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

// Define User schema
const userSchema = new mongoose.Schema({
    title: String,
    desc: String
});

// Create User model
const User = mongoose.model("User", userSchema);

async function check() {
    console.log("Hello");
    try {
        // Create a new user
        const newUser = await User.create({ title: "Geetansh", desc: "Jain" });
        console.log("New user:", newUser);
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

check();

user.findAll({ where: { sal: 50000 } }).then((result) => { console.log(result) })