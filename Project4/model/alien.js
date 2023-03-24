const mongoos=require('mongoose')

const alienschema =new mongoos.Schema({
name:{
    type:String,
    required:true,
},
tech:{
    type:String,
    required:true,
},
sub:{
    type:String,
    required:true,
    default:false
}
});

module.exports =mongoos.model('Alien',alienschema);