// console.log("hello world")
// console.log("i should not make error")
// function calculation(a,b)
// {
// var sum = a+b;
// console.log(sum)
// var sub =a-b;
// console.log(sub)
// }
// return calculation(2,5)
// const os= require('os')
// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.uptime())
// console.log(os.totalmem())
// 
// const fs = require('fs')
// fs.readFile('sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("error")
//     }
//     else
//     {
//         console.log(data)
//     }
// })
// const fs =require('fs')
const str='i am good,i alwaya a developer.welcome';
// fs.writeFile('test.txt',str,'utf8',(err,data)=>{
//     if(err)
//     {
//         console.log("err")
//     }
//     else
//     {
//         console.log("fetched sucesfully")
//     }

// })
// synchronous
// const fs=require('fs')
// try 
// {
// fs.writeFileSync('test1.txt','utf-8',str)
// let data= fs.readFileSync('test1.txt','utf-8')
// console.log(data)
// }
// catch(error)
// {
// console.log('error')
// }

// very very important

// const data =[{name:"men",age:"20"}]
// const http = require('http')
// const PORT = 8000;
// const server = http.createServer((req,res)=>{
//     try 
//     {
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end('<h1>welcome</h1>')


//     }
//     catch(error){
// console.log(error)
//     }
// })
// server.listen(PORT,()=>console.log('server listening port' + PORT))
//  reading html file
const fs =require('fs')
const http = require('http')
const PORT = 8000
const server = http.createServer((req,res)=>{
    try{
        let  data =fs.readFileSync('index.html','utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
    }
    catch(error)
    {
console.log('error')
    }
})
server.listen(PORT,()=>console.log('server listening port' + PORT))
