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
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CleaningService } from './cleaning.service';
import { CreateCleaningDto } from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';
import { CreateSurfaceDto } from './dto/create-surface.dto';
import { ICleanings } from './interfaces/cleaning.interface';
import { GetUser } from 'src/decorator/get-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { CreateCleaningRelevesDto } from './dto/create-cleaning-releves.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FILE_FOLDER_DIR } from 'constants/constants';
import { mkdirSync } from 'fs';

@ApiTags('Cleaning')
@Controller('cleaning')
export class CleaningController {
  constructor(
    @Inject('ICleaning') private readonly cleaningService: ICleanings,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCleaningDto: CreateCleaningDto) {
    return this.cleaningService.create(createCleaningDto);
  }
  

  @Post('/surface')
  createSurface(@Body() surface: CreateSurfaceDto) {
    return this.cleaningService.createSurface(surface);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/releves')
  createReleve(@Body() releves: any) {
    return this.cleaningService.createReleve(releves);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/zones/me')
  MyZones(@GetUser() user: any) {
    return this.cleaningService.MyZones(user);
  }


  @UseGuards(JwtAuthGuard)
  @Get('/me')
  MyReleves(@GetUser() user: any) {
    return this.cleaningService.MyReleves(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/surface/:zoneId')
  MySurfacesById(@Param('zoneId') zoneId: string) {
    return this.cleaningService.MySurfacesById(zoneId);
  }

  @Post(':folderId/upload')
  @UseInterceptors(
    FileInterceptor('files', {
      storage: diskStorage({
        destination: (req, file, callback) => {
          const folderId = req.params.folderId; 
          const uploadPath = `${FILE_FOLDER_DIR}/cleaning/${folderId}`;
          mkdirSync(uploadPath, { recursive: true }); 
          callback(null, uploadPath);
        },
        filename: (req, file, callback) => {
          callback(null, `${file.originalname}`);
        },
      }),
    }),
  )
  uploadFile(@Param('folderId') folderId : any ,@UploadedFiles() files: Express.Multer.File) {
    if (!files) {
      console.log('Aucun fichier uploadé' , folderId);
      return { message: 'Aucun fichier uploadé' };
    }
    return {
      message: 'Fichier uploadé avec succès',
      file: files,
    };
  }


  @Get()
  findAll() {
    return this.cleaningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cleaningService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCleaningDto: UpdateCleaningDto,
  ) {
    return this.cleaningService.update(id, updateCleaningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cleaningService.remove(id);
  }

  @Delete('/surface/:id')
  deleteSurface(@Param('id') id: number) {
    return this.cleaningService.deleteSurface(id);
  }
}
