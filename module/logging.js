
const router=require("express").Router()
const path=require("path")// 파일 경로를 조합 해주는 패케지 이다.  이것이 있어야 
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/";

const logFun=(id,api_name,req_host,data, api_call_time)=>{
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log("mongodb",err)
        }
        const dbo=db.db("badonna")
        const myobj = {
            userId: id,
            apiName : api_name,
            reqHost : req_host,
            useData : data,
            apiCallTime : api_call_time
        }

        dbo.collection("record").insertOne(myobj, function(err, res) {
            if (err){
                console.log(err)
            }else{
                console.log("logging insert")
            }
            db.close();
        })

    })
    
}

module.exports=logFun