import { ImageEqual, ImageToVerifyBasedInBase64, ImageToVerifyBasedInData } from './types';
declare class ImageComparator {
    static verifyByBase64: (imagesToVerify: ImageToVerifyBasedInBase64[]) => ImageEqual[];
    static verifyByBytes: (imagesToVerify: ImageToVerifyBasedInData[]) => ImageEqual[];
}
export default ImageComparator;
