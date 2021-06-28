const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial_devlopment',{useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to MongoDB"));
db.once('open',function(){
    console.log('connected to database::mongo db');
});


module.exports=db;