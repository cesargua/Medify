const express = require('express')
const morgan = require('morgan')
const {compareMeds} = require('./handlers')
const app = express();
app.use(morgan('tiny'))
app.use(express.json());

// app.use(express.logger());
const PORT = 3000;



app.get('/',(req,res)=>{
     res.send("Medify!").status(200)
})

app.post('/compare', compareMeds)

// app.put()

app.listen(PORT,(err)=>{
    if(err) console.log('Cannot connect to port');
    console.log('Connected to PORT', PORT, `at http://localhost:${PORT}`);
})