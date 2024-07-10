import mongoose, { Mongoose, model } from "mongoose";

const dataSchema= new mongoose.Schema({
    name:{type:String},
 
})

export default mongoose.model.datas || mongoose.model('data',dataSchema)