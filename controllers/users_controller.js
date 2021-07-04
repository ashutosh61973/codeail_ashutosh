const User=require('../models/user')


module.exports.profile=function(req,res){
    // res.send('<h1>user profile</h1>');
    // res.render('user_profile',{
    //     title:"user page",
    //     names:"ashutosh"
    // });
    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id,function(err,user){
            if(user)
            {
                return res.render('user_profile',{
                    title : "User_Profile",
                    user: user
                })
            }
            return res.redirect('/users/sign-in');
        });
        
    }
    else
    {
        return res.redirect('/users/sign-in');
    }
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
  //STEP to Authenticate

    //find user
    User.findOne({email : req.body.email},function(err,user){

        if(err){console.log('error is finding user in signing up');return}
         //if user found
         if(user)
         {
            // PASSWORD WHICH NOT FOUND
            if(user.password!=req.body.password)
            {
                return res.redirect('back');

            }   
            // SESSION CREATION
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');

         }
         else
         {
            //user not found 
            return res.redirect('back');
         }


    });
}
module.exports.logoutUser=function(req,res){
    // res.clearCookie(req.cookie.user_id);
    res.clearCookie("user_id");
    console.log(req);
    console.log('------------------------------------------------------');
    console.log(res);
    return res.status(200).redirect('/users/sign-in');   
}