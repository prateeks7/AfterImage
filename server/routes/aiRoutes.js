import express from "express";
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.send("AI Good");
});
router.route('/').post((req, res) => {
  fetch("https://stablehorde.net/api/v2/generate/async",
    {
      method: "POST",
      headers: { 'accept': 'application/json', 'apikey': process.env.AI_API_KEY, 'Client-Agent': 'unknown:0:unknown', 'Content-Type': 'application/json' },
      body: JSON.stringify({ "prompt": req.body.prompt })
    }
  ).then(
    postResp => postResp.json().then(
      idResp => {
        function getImage() {
          console.log(idResp.id)
          fetch("https://stablehorde.net/api/v2/generate/status/" + idResp.id,
            {
              method: "GET",
              headers: { 'accept': 'application/json', 'Client-Agent': 'unknown:0:unknown' }
            }).then(
              getResp => { getResp.json().then(imgResp => { console.log("imgResp"); if (imgResp.done) { res.status(200).json(imgResp.generations[0].img) } else { setTimeout(() => getImage(), 10000) } }) }
            )
        }
        getImage();
      }
    )
  );
});

export default router;