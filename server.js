const express = require ('express');
const app = express();

const path = require('path');

const database = require('./database/conn');
const routes = require('./routes/main');
const hbs = require('hbs');
const Users = require ('./models/userData');


const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false})); // with the help this you can get your data

//setting path 
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath))



app.use('', routes);



//Template Engine (hbs);
app.set('view engine', 'hbs');
app.set('views', 'views')
hbs.registerPartials("views/partials");

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port no : ${PORT}`);
})