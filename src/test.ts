//Exemple
import { readFileSync, writeFileSync } from 'fs';

import { ImageTester } from '.';

let a = {
  id: "1img",
  base64: readFileSync("./data/1img.png", "base64"),
};

let b = {
  id: "2img",
  base64: readFileSync("./data/2img.png", "base64"),
};

let c = {
  id: "3img",
  base64: readFileSync("./data/3img.png", "base64"),
};
const result = ImageTester([a, b, c]);

writeFileSync("test.json", JSON.stringify(result), "utf-8");
