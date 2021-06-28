const express = require('express');
const app = express();
const port = 8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');


app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// use express router 
app.use('/', require('./routes'));

//setup view engine
app.set('view engine','ejs');

app.set('views','./views');





app.listen(port, function (errr) {
    if (errr) {   
        console.log(`Errror in running the server: ${errr}`);
    }
    console.log(`Server on running on port : ${port}`);
});
