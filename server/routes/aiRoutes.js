import express from "express";
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.send("AI Good");
});
router.route('/').post((req, res) => {
  fetch("https://api-inference.huggingface.co/models/johnslegers/epic-diffusion-v1.1",
      {
        headers: { Authorization: "Bearer "+process.env.AI_API_KEY },
        method: "POST",
        body: JSON.stringify({"inputs": req.body.prompt}),
      }
    ).then(response => response.arrayBuffer()).then(result => {
        
        const img = Buffer.from(result).toString("base64");

        if(img===process.env.ERR_ERROR || img===process.env.ERR_BLACK)
          res.status(200).json("ErrorRequest");
        else
          res.status(200).json("data:image/jpg;base64,"+img);
        });
});

export default router;