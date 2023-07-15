import { ImageEqual, ImageToVerifyBasedInBase64, ImageToVerifyBasedInData } from './types';


class ImageComparator {
  imagesEqual: ImageEqual[] = [];

  static verifyByBase64 = (imagesToVerify: ImageToVerifyBasedInBase64[]): ImageEqual[] => {
    const aux: ImageEqual[] = [];
    for (let i = 0; i < imagesToVerify.length; i++) {
      const image = imagesToVerify[i];
      const auxImage: string[] = [];
      imagesToVerify.forEach((v) => {
        if (image.base64 === v.base64 && image.id !== v.id) {
          auxImage.push(v.id);
        }
      });
      let a: ImageEqual = {
        id: image.id,
        imagesIdsEqual: auxImage,
      };
      aux.push(a);
    }
    return aux;
  };

  static verifyByBytes = (imagesToVerify: ImageToVerifyBasedInData[]): ImageEqual[] => {
    const aux: ImageEqual[] = [];
    for (let i = 0; i < imagesToVerify.length; i++) {
      const image = imagesToVerify[i];
      const auxImage: string[] = [];
      imagesToVerify.forEach((v) => {
        if (image.data.equals(v.data) && image.id !== v.id) {
          auxImage.push(v.id);
        }
      });
      let a: ImageEqual = {
        id: image.id,
        imagesIdsEqual: auxImage,
      };
      aux.push(a);
    }
    return aux;
  };
}

export default ImageComparator;
