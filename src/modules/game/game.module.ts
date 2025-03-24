import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { CreateGameAction } from './action/create_game.action';

@Module({
  controllers: [GameController],
  providers: [GameService, CreateGameAction],
})
export class GameModule {}
