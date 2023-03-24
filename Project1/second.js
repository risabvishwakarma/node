//http
const http=require("http")

const server=http.createServer((req,resp)=>{
resp.writeHead(200,{"content-type":"text/html"});
resp.write("<h1>Wow great</h1>")
resp.end("okay bye")
});

server.listen(8080)