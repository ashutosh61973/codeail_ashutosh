const express = require('express');
const app = express();
const port = 8000;

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
