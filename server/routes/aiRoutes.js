import express from "express";
import * as dotenv from 'dotenv';
import fetch, { Headers } from 'node-fetch';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.send("AI Good");
});
router.route('/').post(async (req, res) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "key": process.env.AI_API_KEY,
    "prompt": req.body.prompt,
    "negative_prompt": null,
    "width": "1024",
    "height": "1024",
    "samples": "1",
    "num_inference_steps": "20",
    "seed": null,
    "guidance_scale": 7.5,
    "safety_checker": "yes",
    "multi_lingual": "no",
    "panorama": "no",
    "self_attention": "no",
    "upscale": "no",
    "embeddings_model": null,
    "webhook": null,
    "track_id": null
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
    .then(response => response.text())
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => res.status(500).send(error));
});

export default router;