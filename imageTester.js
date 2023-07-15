"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageComparator {
  constructor() {
    this.imagesEqual = [];
  }
}

ImageComparator.verifyByBase64 = (imagesToVerify) => {
  const aux = [];
  for (let i = 0; i < imagesToVerify.length; i++) {
    const image = imagesToVerify[i];
    const auxImage = [];
    imagesToVerify.forEach((v) => {
      if (image.base64 === v.base64 && image.id !== v.id) {
        auxImage.push(v.id);
      }
    });
    let a = {
      id: image.id,
      imagesIdsEqual: auxImage,
    };
    aux.push(a);
  }
  return aux;
};
ImageComparator.verifyByBytes = (imagesToVerify) => {
  const aux = [];
  for (let i = 0; i < imagesToVerify.length; i++) {
    const image = imagesToVerify[i];
    const auxImage = [];
    imagesToVerify.forEach((v) => {
      if (image.data.equals(v.data) && image.id !== v.id) {
        auxImage.push(v.id);
      }
    });
    let a = {
      id: image.id,
      imagesIdsEqual: auxImage,
    };
    aux.push(a);
  }
  return aux;
};
exports.default = ImageComparator;
//# sourceMappingURL=imageTester.js.map
