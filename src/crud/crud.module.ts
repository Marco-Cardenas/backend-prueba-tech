import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../data_base/usuarios.schema';
import { IngredientSchema } from '../data_base/ingredientes.schema';
import { RecipeSchema } from '../data_base/recetas.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name: 'usuarios', schema: UserSchema},
    {name: 'ingredientes', schema: IngredientSchema},
    {name: 'recetas', schema: RecipeSchema}

  ])],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
