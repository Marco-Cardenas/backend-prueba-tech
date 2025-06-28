import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IngredientDocument = HydratedDocument<Ingrediente>;

@Schema()
export class Ingrediente {
  @Prop({default: ''})
  nombre: string;

  @Prop({default: 0})
  calorias: number;

  @Prop({type:[String], default: []})
  vitaminas: string[];
}

export const IngredientSchema = SchemaFactory.createForClass(Ingrediente);
