import { Injectable } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';

@Injectable()
export class CatsService {

  async create(createCatDto: CreateCatDto): Promise<string> {
    await this.sleep();

    return `Cat ${JSON.stringify(createCatDto)} created`;
  }

  async findAll(listAllEntities: ListAllEntities): Promise<string> {
    await this.sleep();

    return `Finded cats ${JSON.stringify(listAllEntities)}`;
  }

  async findOne(id: number): Promise<string> {
    await this.sleep();

    return `Cat :${id} finded`;
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<string> {
    await this.sleep();

    return `Cat :${id} updated ${JSON.stringify(updateCatDto)}`;
  }

  async remove(id: number): Promise<string> {
    await this.sleep();

    return `Cat :${id} deleted`;
  }

  sleep(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

}
