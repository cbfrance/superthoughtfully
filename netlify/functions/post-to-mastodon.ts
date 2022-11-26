import fetch from "node-fetch";
import fs from "fs";
import { schedule } from "@netlify/functions";
import path from "path";

import Mastodon from "mastodon";

// https://github.com/hylyh/node-mastodon
// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule("@hourly", async (event) => {
  console.log("Received event, posting ...");

  const mastodon = new Mastodon({
    access_token: "gyG6CqeULjD5mkNS23fmzUPPxKIZbQMhKmS3H2wOMM4",
    timeout_ms: 60 * 1000,
    api_url: "https://botsin.space/api/v1/",
  });

  var id: string = "";
  const imagesDir = "public/twitter-export";

  console.log(imagesDir)

  //   post a random images from public/twitter-export
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      var random = Math.floor(Math.random() * files.length);
      var file = files[random];

      const imagePath = path.join(imagesDir, file)
      console.log(imagePath);

      mastodon
        .post("media", { file: fs.createReadStream(imagePath) })
        .then((resp) => {
          id = resp.data.id;
          mastodon.post("statuses", { media_ids: [id] });
        });
    }

    return {
      statusCode: 200,
    };
  });
});

export { handler };