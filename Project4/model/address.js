const database=require('mongoose')

const address=new database.Schema({
        Home:String,
        City:{
            type:String,
            require:true
        },
        Pin:{
            type:Number,
            require:true
        },
        State:{
            type:String,
            require:true
        },
        Country:{
            type:String,
            require:true
        },
        Mobile:{
            type:Number,
            require:true
        }

});

module.exports=database.model("Address",address);