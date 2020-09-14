const express = require('express');
var multer = require('multer')
const app = express()

const absoluteStyle = __dirname + '/public';
const abFile = __dirname + '/views/index.html';
app.use(express.static(absoluteStyle))
app.use(multer().single('upfile'))

app.get('/', (req,res)=>{
    res.sendFile(abFile, (err,data)=>{
        if(err){
            res.send("Error")
        }
    })
})

app.post('/api/fileanalyse', (req, res)=>{
    res.json({
        "name": req.file.originalname,
        "type": req.file.mimetype,
        "size": req.file.size
    })
})

app.listen(3000, ()=>console.log("Server is now running..........."))