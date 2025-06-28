import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
  @Prop({default: ''})
  nombre: string;

  @Prop({default: ''})
  email: string;

  @Prop({default: ''})
  password: string;

  @Prop({default: ''})
  fotoPerfil: string;

  @Prop({type:[String], default: []})
  guardados: string[];
}

export const UserSchema = SchemaFactory.createForClass(Usuario);
