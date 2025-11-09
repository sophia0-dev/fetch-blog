import express from 'express'
import cors from 'cors'
const port = 3000

const server = express();
server.use(cors());
server.use(express.json())

server.get("/api/blog", (req, res) =>{
    res.status(200).json({
        title:"",
        description:"",
        content:""
    })
})
//for validation and error handling
server.post("/api/blog", (req, res) =>{
    // res.send('welcome');
    const data = req.body;
    if (!data.name){
        
 res.status(400).send('A valid name attribute is required');
    }

 else if (data.name !== sophia) {
    res.status(400).send('Input the correct name joor')
 } 
 else {
    res.status(200).send('Good Job😎')
 }

})
server.get('/api/error', (req, res) =>{
    res.status(400).send('error')
})

server.listen(port,() =>{
    console.log(`server is running at ${port}`)
})