
 const fs=require("fs")
// //read
// fs.readFile('./filename.txt',(error,data)=>{
// if(error){
//     console.log("error "+ error);
// }else {console.log("data is :- "+ data);}

// });
// console.log("terminated")
//write
// let content="wow this is dynamic containt"
// fs.writeFile('new_file.txt',content,(err)=>{
//     if(err){
//         console.log("this is error :- "+err);
//     }else {
//         console.log("saved");
//     }

// }
// );

//append
// fs.appendFile("./filename.txt","new content",(err)=>{
// if(err){
//     console.log(err);
// }else console.log("appended");

// });

//delete

fs.unlink("./filename.txt",(err)=>{
if(err)console.log(err)
else console.log("deleted")

})


