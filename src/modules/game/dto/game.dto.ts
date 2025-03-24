export class GameDto {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly nPlayers: number,
        public readonly turn: number,
        public readonly status: number
    ) { }
}