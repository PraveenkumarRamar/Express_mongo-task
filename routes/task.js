const express = require('express')
const router = express.Router()
const {mongoDB,dbname,dburl} = require('../configuration/dbConfig')
const MongoClient = mongoDB.MongoClient
const client = new MongoClient(dburl)

router.get('/students',async(req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbname)
        let data = await db.collection("student").find().toArray()
        res
        .status(200)
        .send({
            message:"Data fetched successfully",
            data
        })
    } catch (error) {
        res
        .status(500)
        .send({
            message:"Internal server error"
        })
    }
    finally{
        client.close()
    }
})

router.get('/students/:id',async(req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbname)
        let data = await db.collection("student").findOne({_id:new mongoDB.ObjectId(req.params.id)})
        if(data){
                    res
        .status(200)
        .send({
            message:"Data fetched successfully",
            data
        })
        }
        else{
            res
            .status(404)
            .send({
                message:"Invalid ID"
            })
        }

    } catch (error) {
        res
        .status(500)
        .send({
            message:"Internal server error"
        })
    }
    finally{
        client.close()
    }
})

router.put('/students/:id',async(req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbname)
        let data = await db.collection("student").updateOne({_id:new mongoDB.ObjectId(req.params.id)},{$set:req.body})
        
        res
        .status(200)
        .send({
            message:"Data updated successfully",
            data
        })
    } catch (error) {
        res
        .status(500)
        .send({
            message:"Internal server error"
        })
    }
    finally{
        client.close()
    }
})

router.delete('/students/:id',async(req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbname)
        let data = await db.collection("student").deleteOne({_id:new mongoDB.ObjectId(req.params.id)})
        
        res
        .status(200)
        .send({
            message:"Data deleted successfully",
            data
        })
    } catch (error) {
        res
        .status(500)
        .send({
            message:"Internal server error"
        })
    }
    finally{
        client.close()
    }
})

router.post('/add-student',async(req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbname)
        let data = await db.collection("student").insertOne(req.body)
        res
        .status(200)
        .send({
            message:"Data added successfully",
            data
        })
    } catch (error) {
        res
        .status(500)
        .send({
            message:"Internal server error"
        })
    }
    finally{
        client.close()
    }
})


router.get('/mentors',async(req,res)=>{
    await client.connect()
        try {
            let db = await client.db(dbname)
            let data = await db.collection("mentor").find().toArray()
            res
            .status(200)
            .send({
                message:"All Mentor's are fetched succesfully",
                data
            })
        } catch (error) {
            res
            .status(500)
            .send({
                message:"Internal server Error"
            })
        }
        finally{
            client.close()
        }
})

router.get('/mentor/:id',async(req,res)=>{
    await client.connect()
        try {
            let db = await client.db(dbname)
            let data = await db.collection("mentor").findOne({_id:new mongoDB.ObjectId(req.params.id)})
            if(data){
                res
            .status(200)
            .send({
                message:"Mentor are fetched succesfully",
                data
            })
            }else{
                res.status(404).send({
                    message:"Invalid ID "
                })
            }
            
        } catch (error) {
            res
            .status(500)
            .send({
                message:"Internal server Error"
            })
        }
        finally{
            client.close()
        }
})

router.put('/mentor/:id',async(req,res)=>{
    await client.connect()
        try {
            let db = await client.db(dbname)
            let data = await db.collection("mentor").updateOne({_id:new mongoDB.ObjectId(req.params.id)},{$set:req.body})
            res
            .status(200)
            .send({
                message:"Mentor's details updated succesfully",
                data
            })
            
        } catch (error) {
            res
            .status(500)
            .send({
                message:"Internal server Error"
            })
        }
        finally{
            client.close()
        }
})

router.delete('/mentor/:id',async(req,res)=>{
    await client.connect()
        try {
            let db = await client.db(dbname)
            let data = await db.collection("mentor").deleteOne({_id:new mongoDB.ObjectId(req.params.id)})
            res
            .status(200)
            .send({
                message:"Mentor's are fetched succesfully",
                data
            })
            
        } catch (error) {
            res
            .status(500)
            .send({
                message:"Internal server Error"
            })
        }
        finally{
            client.close()
        }
})

router.post('/add-mentor',async(req,res)=>{
    await client.connect()
        try {
            let db = await client.db(dbname)
            let data = await db.collection("mentor").insertOne(req.body)
            res
            .status(200)
            .send({
                message:"Mentor's are fetched succesfully",
                data
            })
        } catch (error) {
            res
            .status(500)
            .send({
                message:"Internal server Error"
            })
        }
        finally{
            client.close()
        }
})


module.exports = router