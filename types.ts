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

