import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://landingPageBD:landingPageBD2025Web@cluster0.7wc3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Prueba_Tecnica'), CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
