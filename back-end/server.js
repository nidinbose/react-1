
import express from 'express'
import connection  from './connection.js';
import router from './router.js';
import env from 'dotenv'
import cors from 'cors'


env.config()

const app=express()






app.use(express.json());
app.use(express.static('front-end'))
app.use('/api',router)

connection().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`http://localhost:${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})