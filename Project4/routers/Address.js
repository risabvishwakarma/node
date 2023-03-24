const express=require('express')
const router=express.Router();
const Address=require("../model/address")

router.get("/",async (req,res)=>{

     try{
        const ad1=await Address.find();
        res.json(ad1);
        }catch(err){
            res.send(err)
        }
    });

router.post("/",async (req,res)=>{
    
    const address=new Address({
        Home:req.body.Home,
        City:req.body.City,
        Pin:req.body.Pin,
        State:req.body.State,
        Country:req.body.Country,
        Mobile:req.body.Mobile

    })
    try{
        const a1= await address.save();
        res.json(a1);

    }catch(err){
        res.send(err)
    }
})

module.exports =router;


