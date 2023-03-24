const http=require("http")
const url=require("url")
const fs=require("fs")

http.createServer((req,res)=>{
    const path=req.url;
    if(path=="/about"){

        console.log("about page");
         res.writeHead(200,{'content-type':"text/html"});
        const fileContent=fs.readFileSync("./Project1/view/about.html");
        res.write(fileContent);
       res.end();
      

    }else if("/"==path){
        console.log("home page");
        res.writeHead(200,{'content-type':"text/html"});
        const fileContent=fs.readFileSync("./Project1/view/home.html");
        res.write(fileContent);
       res.end();
    }else if("/service"==path){
        console.log("service page")
        res.writeHead(200,{'content-type':"text/html"});
        const fileContent=fs.readFileSync("./Project1/view/services.html");
        res.write(fileContent);
       res.end();
    }
    else console.log(path);
}).listen(8089);