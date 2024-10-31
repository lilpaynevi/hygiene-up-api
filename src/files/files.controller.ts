import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  StreamableFile,
  Res,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  getFile(): StreamableFile {
    const file = createReadStream(
      join(
        process.cwd(),
        'photos',
        'fb422e4e-07cd-4d1b-9502-483c75dd3b1d',
        '1729799681386-fxmbn2xa.jpg',
      ),
    );
    return new StreamableFile(file);
  }

  @Get('/tracability/:tracabilityId/:imageName')
  viewImage(
    @Param('imageName') imageName: string,
    @Param('tracabilityId') tracabilityId: string,
    @Res() res: Response,
  ) {
    const imagePath = join(
      process.cwd(),
      'photos',
      'tracability',
      tracabilityId,
      imageName,
    );
    const imageStream = createReadStream(imagePath);

    if (imagePath === undefined) {
      return { status: 404, message: 'Image not found' };
    }

    res.setHeader('Content-Type', 'image/jpeg');

    return imageStream.pipe(res);
  }
}
