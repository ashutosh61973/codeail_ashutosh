const User=require('../models/user')


module.exports.profile=function(req,res){
    // res.send('<h1>user profile</h1>');
    res.render('user_profile',{
        title:"user page",
        names:"ashutosh"
    });
} 
module.exports.signUp = function(req,res)
{
    if(req.isAuthenticated())
    {
        res.redirect('/users/profile');  
    }
    else{
    return res.render('user_sign_up',{
        title :" Codeil | Sign Up "
    })}

}
module.exports.signIn = function(req,res)
{
    if(req.isAuthenticated())
    {
        res.redirect('/users/profile');  
    }
    else
   { return res.render('user_sign_in',{
        title :" Codeil | Sign in "
    })}

}
// get sign up data
module.exports.create=function(req,res)
{
    // console.log(req);
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){

        if(err){console.log('error is finding user in signing up');return}
        // console.log(`user-param :  ${user}`);
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error is finding user in signing up');return}
                
                return res.redirect('/users/sign-in')
            })
        }
        else
        {
            return res.redirect('back');
        }
    })
}
// sign in and create  
module.exports.createSession=function(req,res)
{
    //something
    return res.redirect('/');

}
module.exports.destroySession =function(req,res){
    req.logout();
    return res.redirect('/');
}