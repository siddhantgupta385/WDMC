const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Handlebars = require("handlebars");
var path = require('path');
const handlebars = require("express-handlebars");
const clubRouter = require('./routes/Club.js');
require('dotenv').config();
const hbs = require('hbs')

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());


// mongo db connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Setting Handlebars for frontend 
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: false
}));

const partialsPath = path.join(__dirname, "../frontend/partials");
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../frontend/'));
app.use(express.static(path.join(__dirname, "../frontend/")));
hbs.registerPartials(partialsPath)


Handlebars.registerHelper('ifNotEquals', function(arg1, arg2, options) {
    return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
});


// End Points
app.use('/club', clubRouter);
app.get("/Club_form", (req, res) => {
    res.render("club_form.hbs")
});
app.get("/", (req, res) => {
    res.render("main.hbs")
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});