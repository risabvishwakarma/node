// console.log("starting Project2");
// let a=34
// let b= 45
// console.log(a+b)

//send mail
const mailer=require("nodemailer");

let transport=mailer.createTransport({
    service:"gmail",
    auth:{
        user:"aryasharma9634@gmail.com",
        pass:"wjmrpupunixzjntc"
    }
});

let messageObj={
    from:"aryasharma9634@gmail.com",
    to:"risab.7088@gmail.com",
    subject:"Email using node js",
    text:"this mail is send using node"

}

transport.sendMail(messageObj,(err,info)=>{
if(err){
    console.log(err);

}else{
    console.log("Sucessfull sent");
}
});
