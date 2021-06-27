module.exports.profile=function(req,res){
    // res.send('<h1>user profile</h1>');
    res.render('user_profile',{
        title:"user page",
        names:"ashutosh"
    });
} 