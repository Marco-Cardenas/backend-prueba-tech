import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/backend-prueba'), CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
