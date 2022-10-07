interface ImageToVerify {
  id: string;
  base64: string;
}
interface ImageEqual {
  id: string;
  imagesIdsEqual: Array<string>;
}

export const ImageTester = (images: Array<ImageToVerify>) => {
  const aux: ImageEqual[] = [];
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    const auxImage: any[] = [];
    images.forEach((v) => {
      if (image.base64 === v.base64 && image.id != v.id) {
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
