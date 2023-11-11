"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageComparator {
}
ImageComparator.verifyByBase64 = (imagesToVerify) => {
    const arrayOfImageEqualToReturn = [];
    for (let i = 0; i < imagesToVerify.length; i++) {
        const image = imagesToVerify[i];
        const auxImage = [];
        imagesToVerify.forEach((v) => {
            if (image.base64 === v.base64 && image.id !== v.id) {
                auxImage.push(v.id);
            }
        });
        arrayOfImageEqualToReturn.push({
            id: image.id,
            imagesIdsEqual: auxImage,
        });
    }
    return arrayOfImageEqualToReturn;
};
ImageComparator.verifyByBytes = (imagesToVerify) => {
    const arrayOfImageEqualToReturn = [];
    for (let i = 0; i < imagesToVerify.length; i++) {
        const image = imagesToVerify[i];
        const auxImage = [];
        imagesToVerify.forEach((v) => {
            if (image.data.equals(v.data) && image.id !== v.id) {
                auxImage.push(v.id);
            }
        });
        arrayOfImageEqualToReturn.push({
            id: image.id,
            imagesIdsEqual: auxImage,
        });
    }
    return arrayOfImageEqualToReturn;
};
exports.default = ImageComparator;
//# sourceMappingURL=imageTester.js.map