const exp = require('express');
const path = require("path");
const app = exp();
const mc = require("mongodb").MongoClient;
app.use(exp.json());
// Front-to-back path join
app.use(exp.static(path.join(__dirname,"dist/firstApp")));
const donorApiRoute = require('./apis/donorApi');
const dburl = "mongodb+srv://prashanth:prashanth@test.k28t2.mongodb.net/lendahand?retryWrites=true&w=majority" 
mc.connect(dburl,(err,client)=>{
    if(err){
        console.log("error in connection",err)
    }
    else{
        console.log("db connected");
        dbObj = client.db("lendahand");
        app.locals.databaseObject = dbObj;
    }
})

//donorApiRoute
//localhost:8080/donate
app.use("/donate",donorApiRoute);

const port = process.env.PORT||8080;
app.listen(port,()=>console.log(`server on port ${port}`));