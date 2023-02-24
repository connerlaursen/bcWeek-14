const express = require("express")
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001


// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//no middleware
// app.use(express.static("./public"))
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async (req, res) => {
    res.render('chart')
})

//get all dishes
app.get('/about', async (req, res) => {

    res.render('about', {
        users: [{
            name: "Alex",
            lname: "L"
        }, {
            name: "Alex1",
            lname: "L"
        }, {
            name: "Alex2",
            lname: "L"
        }, {
            name: "Alex3",
            lname: "L"
        }, {
            name: "Alex4",
            lname: "L"
        }, {
            name: "Alex5",
            lname: "L"
        }, {
            name: "Alex6",
            lname: "L"
        }, {
            name: "Alex7",
            lname: "L"
        }]
    });
});
app.get('/profile', async (req, res) => {
    res.render('profile');
});

//   //get one dish
//   app.get('/', async (req, res) => {
//     // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
//     return res.render('dish', dishes[req.params.num - 1]);
//   });

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})