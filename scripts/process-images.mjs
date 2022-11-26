// write a list of all the files in the images directory
import { promises as fs } from "fs";
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const imagesDir = path.join(__dirname, "../public/twitter-export");
const files = await fs.readdir(imagesDir);
await fs.writeFile(
  path.join(imagesDir, "file-list.json"),
  JSON.stringify(files)
);
console.log(`Wrote ${files.length} files to file-list.json`);