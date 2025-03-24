import { Controller, Post, Header, Body, UseFilters, Get } from '@nestjs/common';
import { HttpExceptionFilter } from '../common/exception-filter/http-exception.filter';
import { CreateGameAction } from './action/create_game.action';
import { CreateGameDto } from './dto/create_game.dto';

@Controller('game')
@UseFilters(HttpExceptionFilter)
export class GameController {

  constructor(private readonly createAction: CreateGameAction) { }

  @Post('/')
  @Header('Cache-Control', 'no-store')
  async create(@Body() createGameDto: CreateGameDto) {
    return await this.createAction.execute(createGameDto);
  }

}
