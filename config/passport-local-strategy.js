const passport =require('passport');
const LocalStrategy= require('passport-local').Strategy;
const User= require('../models/user')
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email,password,done){
        User.findOne({email:email},function(err,user){
            if(err)
            {
                console.log('error in finding user -->Passport');
                return done(err);
            }
            if(!user || user.password!=password){
                cconsole.log('Invalid Username/password');
                return done(null,false);
            }
            return done(null,user);
            
        });
    }



)); 


///serializing the user to decide which key is to be kept in the cookie 
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserialize
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err)
        {
            console.log('errorr in finding user-->passport');
        }
        return done(null,user);
    });
});


//check if ther user is authenticated
passport.checkAuthentication=function(req,res,next)
{
    // if user is sign in 
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/users/sign-in');
}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}




module.exports=passport;