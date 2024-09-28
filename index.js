const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const MONGO_URL = "mongodb://127.0.0.1:27017/yip24"

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
 
main()
.then((res) => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/register", (req, res)=> {
    res.render("register.ejs");
})

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});