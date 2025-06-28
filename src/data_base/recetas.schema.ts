import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Receta>;

@Schema()
export class Receta {
  @Prop({default: ''})
  id_creador: string;

  @Prop({default: ''})
  nombre: string;

  @Prop({type:[{}], default: []})
  ingredientes: {}[];

  @Prop({default: 0})
  likes: number;

  @Prop({default: 0})
  dislikes: number;

  @Prop({default: false})
  public: boolean;
}

export const RecipeSchema = SchemaFactory.createForClass(Receta);
