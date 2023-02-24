const path = require("path");
const express = require("express");
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const sequelize = require("./config/connection.js")


//import api routes
const api = require("./controller");
// server config
const PORT = 3001;

const app = express();

//endpoint / routes
const sessionOptions = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}


//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middlewares
app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", api);





sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log("server is running")
        })
    })
