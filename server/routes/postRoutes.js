import express from "express";
import * as dotenv from 'dotenv';
import Post from "../mongodb/models/post.js";
import { ChatCompletionResponseMessageRoleEnum } from "openai";

dotenv.config();
const router = express.Router();

router.route('/').get(async (req,res) => {
    try{
        const posts = await Post.find({});
    // console.log(posts);

        res.status(200).json({success:true,data:posts});
    }
    catch(err){
        res.status(500).json({success:false,message:err});
    }
})

router.route('/').post(async (req,res) => 
{
    try{
    const {name, prompt, photo} = req.body;
    const newPost = await Post.create({
        name,
        prompt,
        photo,
    });
    // console.log(newPost);
    res.status(200).json({success:true,data:newPost});}
    catch(err){
        res.status(500).send({success:true,message:err});
    }

})

export default router;
