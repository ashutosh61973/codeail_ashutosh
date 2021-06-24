module.exports.home=function(req,res){
   console.log(`hey you are in home controller!!`);
    return res.end('<h1>Express is up for codeial</h1>');
}