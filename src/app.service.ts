import { Inject, Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { DatabaseService } from './database/database.service';

type TypeStringData = {
  string: string;
};

@Injectable()
export class AppService {
  constructor(
    @Inject('TEST') private test: number,
    private readonly databaseService: DatabaseService,
  ) {}
  getHello(): TypeStringData {
    return { string: 'Hello World!' };
  }

  async getPosts() {
    const res = await this.databaseService.post.findMany();
    return res;
  }

  async getPost(id: number) {
    console.log(id);
    const res = await this.databaseService.post.findFirst({
      where: { id: id },
    });
    return res;
  }

  async updatePost(id: number, data: number) {
    const res = await this.databaseService.post.update({
      where: { id: id },
      data: { num: data },
    });
    return res;
  }

  async getPostsCount(): Promise<TypeStringData> {
    const res = await this.databaseService.post.count();
    return { string: `${res}` };
  }

  async save(dto: CreateDto) {
    console.log(this.test);
    return this.databaseService.post.create({
      data: dto,
    });
  }

  async delete(id: number) {
    const res = await this.databaseService.post.delete({
      where: { id: id },
    });
    return res;
  }

  async deleteAll() {
    const res = await this.databaseService.post.deleteMany();
    return res;
  }
}
