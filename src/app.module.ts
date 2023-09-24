import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test/test.service';
import { DatabaseModule } from './database/database.module';
import { MainController } from './main/main.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, MainController],
  providers: [
    AppService,
    TestService,
    {
      provide: 'TEST',
      useValue: 1,
    },
  ],
  exports: [],
})
export class AppModule {}
