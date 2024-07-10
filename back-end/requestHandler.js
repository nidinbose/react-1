import dataSchema from './models/data.model.js'


export async function adddata(req,res){
    try{
        console.log(req.body);
        const { name } = req.body;
        await dataSchema 
        .create({name})
        .then(()=>{
            res.status(201).send({msg:"successully created"});
        })
        .catch((error)=>{
            res.status(404).send({error:error});
        });
        }catch(error){
            res.status(500).send(error)
        }
}












export async function getdatas(req,res){
    try {
        const data=await dataSchema.find();
        res.status(200).send(data)
        console.log(data);
    } catch (error) {
        res.status(500).send(error)
    }
}







export async function updatedata(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
    const {...data}=req.body
    await dataSchema.updateOne({_id:id},{$set:{...data}})
        res.status(201).send({msg:"updated"})
    } catch (error) {
        res.status(400).send(error)
    }
}




export async function deletedata(req, res) {
    try {
        const { id } = req.params;
        console.log(id);    

      await dataSchema.deleteOne({ _id: id });
       res.status(200).send({msg:"successfully deleted"})
    } catch (error) {
        console.error(error);
        res.status(400).send({ error});
    }
}