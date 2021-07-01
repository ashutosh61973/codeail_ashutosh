module.exports.profile=function(req,res){
    // res.send('<h1>user profile</h1>');
    res.render('user_profile',{
        title:"user page",
        names:"ashutosh"
    });
} 
module.exports.signUp = function(req,res)
{
    return res.render('user_sign_up',{
        title :" Codeil | Sign Up "
    })

}
module.exports.signIn = function(req,res)
{
    return res.render('user_sign_in',{
        title :" Codeil | Sign in "
    })

}