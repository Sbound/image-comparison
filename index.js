const ImageComparator = require("./imageTester").default;
const verifyByBase64 = ImageComparator.verifyByBase64;
const verifyByBytes = ImageComparator.verifyByBytes;
module.exports = { ImageComparator, verifyByBase64, verifyByBytes };
