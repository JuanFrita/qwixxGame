import { Injectable } from '@nestjs/common';
import { ListAllEntities } from './dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {

  async create(cat: Cat): Promise<string> {
    await this.sleep();

    return `Cat ${JSON.stringify(cat)} created`;
  }

  async findAll(listAllEntities: ListAllEntities): Promise<string> {
    await this.sleep();

    return `Finded cats ${JSON.stringify(listAllEntities)}`;
  }

  async findOne(id: number): Promise<string> {
    await this.sleep();

    return `Cat :${id} finded`;
  }

  async update(id: number, cat: Cat): Promise<string> {
    await this.sleep();

    return `Cat :${id} updated ${JSON.stringify(cat)}`;
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
