import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
	Res,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response, Request } from 'express';
import * as AWS from 'aws-sdk';

const access_key = `${process.env.S3_ACCESS_KEY}`;
const secret_key = `${process.env.S3_SECRET_KEY}`;
const region = `${process.env.S3_REGION}`;


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
  async uploadFile(@UploadedFile() file: Express.MulterS3.File, @Res() res: Response): Promise<Response> {
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
      // return upload.Location;
			return res.send({
				message:'uplodas success',
				url: upload.Location,
			});
    } catch (err) {
      throw err;
    }
  }
}
