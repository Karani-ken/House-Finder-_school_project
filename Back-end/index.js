const express = require('express');
const cors = require('cors')
const connectDb =require('./config/db')
//import routes
const houseRouter = require('./routes/houseRouter')
//creating app
const app = express();
//middleware
app.use(express.json);
app.use(cors())
//routes
app.use('/api/house',houseRouter);

const port =  4000


    
//home route
  


//server starting
app.listen(port, ()=> {    
    console.log(`Server started on: http://localhost:${port}`)
})      
