import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create_game.dto';

@Injectable()
export class GameService {

  async create(createGameDto: CreateGameDto): Promise<string> {
    return "hello";
  }

}
