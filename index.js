const express = require('express');
const cookieParser=require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
//used for session 
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);




app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// use express router 


//setup view engine
app.set('view engine','ejs');

app.set('views','./views');

//mongo store is used to store session cookie
app.use(session({
    name:'codeil',
    secret:'blah some thing',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:new MongoStore({
        
            mongooseConnection:db,
            autoRemove:'disabled'
        })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);   

app.use('/', require('./routes'));

app.listen(port, function (errr) {
    if (errr) {   
        console.log(`Errror in running the server: ${errr}`);
    }
    console.log(`Server on running on port : ${port}`);
});
