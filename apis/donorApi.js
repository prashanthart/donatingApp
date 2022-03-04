const exp = require('express');
const donorApiRoute = exp.Router();

//localhost:8080/donate/createDonor
donorApiRoute.post('/createDonor',(req,res)=>{

    let obj = req.app.locals.databaseObject;
    obj.collection("donor").insertOne(req.body,(err,success)=>{
        if(err){
            console.log("error in insertion");
        }
        else{
            res.send({message:"success"});
        }
    })
    // console.log(obj);

})

//localhost:8080/donate/getList
// donorApiRoute.get('/getList',(req,res)=>{
//     let obj = req.app.locals.databaseObject;
//     obj.collection("donor").find().toArray((err,userArray)=>{
//         if(err){
//             console.log("error in reading donors");
//         }
//         else{
//             res.send(userArray);
//         }
//     })
    

// })

donorApiRoute.get('/getList',async(req,res)=>{
    let obj = req.app.locals.databaseObject;
    let userArray= await obj.collection("donor").find().toArray();
    res.send(userArray);
    // res.send({message:userArray});

})

module.exports = donorApiRoute;