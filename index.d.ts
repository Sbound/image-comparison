import { Buffer } from 'node:buffer';


declare module "comparador-de-imagens" {
   export type ImageToVerifyBasedInBase64 = {
      id: string;
      base64: string;
   };
   export type ImageToVerifyBasedInData = {
      id: string;
      data: Buffer;
   };

   export type ImageEqual = {
      id: string;
      imagesIdsEqual: string[];
   };
   export default class ImageComparator {
      static verifyByBase64(imagesToVerify: ImageToVerifyBasedInBase64[]): ImageEqual[];
      static verifyByBytes(imagesToVerify: ImageToVerifyBasedInData[]): ImageEqual[];
   }
}
