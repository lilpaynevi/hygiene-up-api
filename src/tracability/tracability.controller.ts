import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
  UploadedFiles,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TracabilityService } from './tracability.service';
import { CreateTracabilityDto } from './dto/create-tracability.dto';
import { UpdateTracabilityDto } from './dto/update-tracability.dto';
import { ITracability } from './interfaces/tracability.interface';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/decorator/get-user.decorator';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiTags } from '@nestjs/swagger';
import { FILE_FOLDER_DIR } from 'constants/constants';
import { mkdirSync } from 'fs';

@ApiTags('Tracability')
@Controller('tracability')
export class TracabilityController {
  constructor(
    @Inject('ITracability') private readonly tracabilityService: ITracability,
  ) {}

  @Post()
  create(@Body() createTracabilityDto: CreateTracabilityDto) {
    return this.tracabilityService.create(createTracabilityDto);
  }

  @Get()
  findAll() {
    return this.tracabilityService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  MyTracability(@GetUser() user: any) {
    return this.tracabilityService.MyTracability(user);
  }

  @Post(':folderId/upload')
  @UseInterceptors(
    FileInterceptor('files', {
      storage: diskStorage({
        destination: (req, file, callback) => {
          const folderId = req.params.folderId; 
          const uploadPath = `${FILE_FOLDER_DIR}/tracability/${folderId}`;
          mkdirSync(uploadPath, { recursive: true }); 
          callback(null, uploadPath);
        },
        filename: (req, file, callback) => {
          callback(null, `${file.originalname}`);
        },
      }),
    }),
  )
  uploadFile(@Param('folderid') folderId : any ,@UploadedFiles() files: Express.Multer.File) {
    if (!files) {
      console.log('Aucun fichier uploadé');
      return { message: 'Aucun fichier uploadé' };
    }
    return {
      message: 'Fichier uploadé avec succès',
      file: files,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tracabilityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTracabilityDto: UpdateTracabilityDto,
  ) {
    return this.tracabilityService.update(+id, updateTracabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tracabilityService.remove(+id);
  }
}
