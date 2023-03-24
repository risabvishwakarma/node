const http=require('http')
const mongoos=require('mongoose')
const express=require('express');
const { Console } = require('console');
const server=express();
const PORT=8083;

const url='mongodb://localhost:27017/AlienDBex'
try{
 mongoos.connect(url,{useNewUrlParser:true})
.catch(error => console.log("ERROR:- "+error));

const con=mongoos.connection

con.on('open',()=>{
    console.log('mongo connected...');
});

server.use(express.json());


const alienrouter=require('./routers/aliens')
const addressrouter=require('./routers/Address')


server.use('/alien',alienrouter);
server.use('/address',addressrouter);



server.listen(PORT,(req,res)=>{
    console.log("Running on Port ...  "+`${PORT}`);
});
}catch(e){
    Console.log("Error :-"+e);
}
