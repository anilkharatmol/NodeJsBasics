const path = require("path");
const cors=require('cors')
const express = require("express");

const errorController = require("./controllers/error");

const app = express();
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

const userRoutes = require("./routes/user");
const sequelize = require("./util/database");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(errorController.get404);


  sequelize.sync().then(result=>{
    app.listen(3000)
}).catch(err=>console.log(err))

