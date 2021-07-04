const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const userSchema =new mongoose.Schema({
    email: {
        type :String,
        required :true,
        unique: true
    },
    password :{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    }

},{
    timestamps:true
});


const User =mongoose.model('User',userSchema);
module.exports=User;