import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

type TypeStringData = {
  string: string;
};

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number): any {
    if (id < 1) {
      throw new BadRequestException("The 'id' cannot be lower than zero");
    }
    return { id };
  }

  @Get('get')
  getHello(): TypeStringData {
    return this.appService.getHello();
  }

  @Get('posts/count')
  async getPostsCount(): Promise<TypeStringData> {
    return await this.appService.getPostsCount();
  }

  @Get('posts')
  async getPosts() {
    return await this.appService.getPosts();
  }

  @Get('posts/:id')
  async getPost(@Param('id', ParseIntPipe) id: number) {
    return await this.appService.getPost(id);
  }

  @UsePipes(new ValidationPipe())
  @Post('posts/create')
  async create(@Body() dto: CreateDto) {
    const res = await this.appService.save(dto);
    return res;
  }

  @Put('posts/update/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateDto) {
    const res = await this.appService.updatePost(id, dto.num);
    return res;
  }

  @Delete('posts/delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const res = await this.appService.delete(id);
    return res;
  }

  @Delete('posts/delall')
  async deleteAll() {
    const res = await this.appService.deleteAll();
    return res;
  }
}
