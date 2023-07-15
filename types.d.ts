declare type ImageToVerifyBasedInBase64 = {
   id: string;
   base64: string;
};

declare type ImageToVerifyBasedInData = {
   id: string;
   data: Buffer;
};

declare type ImageEqual = {
   id: string;
   imagesIdsEqual: string[];
};

declare class ImageComparator {
   imagesEqual: ImageEqual[];


   verifyByBase64(imagesToVerify: ImageToVerifyBasedInBase64[]): ImageEqual[];
   verifyByBytes(imagesToVerify: ImageToVerifyBasedInData[]): ImageEqual[];
}

export default ImageComparator;
