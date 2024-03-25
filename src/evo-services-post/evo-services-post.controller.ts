import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { EvoServicesPostService } from './evo-services-post.service';
import { CreateEvoServicesPostDto } from './dto/create-evo-services-post.dto';
import { UpdateEvoServicesPostDto } from './dto/update-evo-services-post.dto';
import { error } from 'console';

/*
https://www.youtube.com/watch?v=-ahCssisfwQ
https://www.youtube.com/watch?v=geGcMSCtDVk
*/

@Controller('evo-services-post')
export class EvoServicesPostController {
  constructor(private readonly evoServicesPostService: EvoServicesPostService) {}

  @Post('/generatesession')
  generateSession(){
    return this.evoServicesPostService.generateSession()
    .then(resp =>{
      return resp;
    })
    .catch(error =>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/initauth3d')
  initAuth3D(@Body() session_id: string) {
    return this.evoServicesPostService.initAuth3D()
    .then(resp => {
      return resp;
    })
    .catch(error =>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  create(@Body() createEvoServicesPostDto: CreateEvoServicesPostDto) {
    return this.evoServicesPostService.create(createEvoServicesPostDto);
  }

  @Get()
  findAll() {
    return this.evoServicesPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evoServicesPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvoServicesPostDto: UpdateEvoServicesPostDto) {
    return this.evoServicesPostService.update(+id, updateEvoServicesPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evoServicesPostService.remove(+id);
  }
}
