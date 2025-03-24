import { Injectable } from "@nestjs/common";
import { GameService } from "../game.service";
import { CreateGameDto } from "../dto/create_game.dto";

@Injectable()
export class CreateGameAction {

    constructor(private readonly gameService: GameService) { }

    execute(createGameDto: CreateGameDto): Promise<string> {
        return this.gameService.create(createGameDto);
    }
}