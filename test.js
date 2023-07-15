"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const imageTester_1 = require("./dist/imageTester");
const a = {
  id: "1img",
  base64: (0, fs_1.readFileSync)("./data/1img.png", "base64"),
};
const b = {
  id: "2img",
  base64: (0, fs_1.readFileSync)("./data/2img.png", "base64"),
};
const c = {
  id: "3img",
  base64: (0, fs_1.readFileSync)("./data/3img.png", "base64"),
};
const img1 = {
  id: "1img",
  data: (0, fs_1.readFileSync)("./data/1img.png"),
};
const img2 = {
  id: "2img",
  data: (0, fs_1.readFileSync)("./data/2img.png"),
};
const img3 = {
  id: "3img",
  data: (0, fs_1.readFileSync)("./data/3img.png"),
};
const base64 = imageTester_1.default.verifyByBase64([a, b, c]);
const data = imageTester_1.default.verifyByBytes([img1, img2, img3]);
console.log(base64);
console.log(data);
//# sourceMappingURL=test.js.map
