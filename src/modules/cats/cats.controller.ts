import { Controller, Get, Post, Header, Param, Body, Query, Put, Delete, BadRequestException, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
import { HttpExceptionFilter } from '../common/exception-filter/http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {

  constructor(private readonly catsService: CatsService) { }

  @Post('/exception')
  async exception() {
    try {
      await this.catsService.error();
    } catch (error) {
      throw new BadRequestException('You can not access to cats', {
        cause: error,
        description: 'Miau...'
      });
    }
  }

  @Post('/')
  @Header('Cache-Control', 'no-store')
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get('/')
  async findAll(@Query() query: ListAllEntities) {
    return this.catsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.catsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.catsService.remove(+id);
  }

}
