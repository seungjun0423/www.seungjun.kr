import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import * as AWS from 'aws-sdk';
// import fs from 'fs';
// import { S3Client, AbortMultipartUploadCommand } from '@aws-sdk/client-s3';

const access_key = `${process.env.S3_ACCESS_KEY}`;
const secret_key = `${process.env.S3_SECRET_KEY}`;
const region = `${process.env.S3_REGION}`;

// const s3 = new S3Client({
//   credentials: {
//     accessKeyId: access_key,
//     secretAccessKey: secret_key,
//   },
//   region: region,
// });

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
  region: region,
});
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

@Controller('uploads')
export class UploadsController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.MulterS3.File): Promise<any> {
    console.log(file);
    try {
      const key = `${Date.now() + file.originalname}`.replace(/ /g, '');
      const upload = await s3
        .upload({
          Key: key,
          Body: file.buffer,
          Bucket: BUCKET_NAME,
          ContentType: file.mimetype,
          ACL: 'public-read',
        })
        .promise();
      return upload.Location;
    } catch (err) {
      console.log('업로드 실패');
      throw err;
    }
  }
}
