const http=require("http")
const url=require("url")

http.createServer((req,res)=>{
    console.log(req.url);
  const urlobj=  url.parse(req.url,true)
  console.log(urlobj.query.keywords);

}).listen(8087);