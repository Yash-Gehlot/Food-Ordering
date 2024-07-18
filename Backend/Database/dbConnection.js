import mongoose from 'mongoose'

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "Restaurant"
    }).then(()=>{
        console.log("Connected to Database Successfully");
    }).catch(err=>{
        console.log(`Some error occured ${err}`);
    })
}