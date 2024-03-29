import { ImageEqual, ImageToVerifyBasedInBase64, ImageToVerifyBasedInData } from './types';


class ImageComparator {
  static verifyByBase64 = (imagesToVerify: ImageToVerifyBasedInBase64[]): ImageEqual[] => {
    const arrayOfImageEqualToReturn: ImageEqual[] = [];
    for (let i = 0; i < imagesToVerify.length; i++) {
      const image = imagesToVerify[i];
      const auxImage: string[] = [];
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

  static verifyByBytes = (imagesToVerify: ImageToVerifyBasedInData[]): ImageEqual[] => {
    const arrayOfImageEqualToReturn: ImageEqual[] = [];
    for (let i = 0; i < imagesToVerify.length; i++) {
      const image = imagesToVerify[i];
      const auxImage: string[] = [];
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
}

export default ImageComparator;
