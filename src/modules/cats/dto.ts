export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
}

export class ListAllEntities {
    name: string;
    age: number;
    breed: string;
    perpage: number;
    page: number
}

export class UpdateCatDto {
    name: string;
    age: number;
    breed: string;
}