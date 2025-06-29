import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from '../data_base/usuarios.schema';
import { Ingrediente } from '../data_base/ingredientes.schema';
import { Receta } from '../data_base/recetas.schema';

@Injectable()
export class CrudService {
  constructor(
    @InjectModel('usuarios') private readonly userModel: Model<Usuario>,
    @InjectModel('ingredientes') private readonly ingredienteModel: Model<Ingrediente>,
    @InjectModel('recetas') private readonly recipeModel: Model<Receta>
  ){}

  //CRUD Usuarios
  async getUsers(id = {}) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async insertUser(newUser) {
    const user = await this.userModel.create(newUser);
    return await user.save();
  }

  async updateUser(userID, newData) {
    const user = await this.userModel.findByIdAndUpdate(userID, newData, {new:true});
    return user;
  }

  async deleteUser(userID) {
    const user = await this.userModel.findByIdAndDelete(userID);
    return user;
  }



  //CRUD Ingredientes
  async getIngredientes() {
    const ing = await this.ingredienteModel.find();
    return ing;
  }

  async insertIng(newIng) {
    const ing = await this.ingredienteModel.create(newIng);
    return await ing.save();
  }

  async updateIng(ingID, newData) {
    const ing = await this.ingredienteModel.findByIdAndUpdate(ingID, newData, {new:true});
    return ing;
  }

  async deleteIng(ingID) {
    const ing = await this.ingredienteModel.findByIdAndDelete(ingID);
    return ing;
  }

  

  //CRUD Recetas
  async getRecipes(opt = {}) {
    const recipe = await this.recipeModel.find(opt);
    if(recipe.length == 0) {
      return null;
    }

    return recipe;
  }

  async insertRecipe(newReceta) {
    const newRecipe = await this.recipeModel.create(newReceta);
    return await newRecipe.save();
  }

  async recetaLike(recetaID) {
    const like = await this.recipeModel.findByIdAndUpdate(recetaID, { $inc: {likes: 1} }, {new:true});

    return like;
  }

  async recetaDislike(recetaID) {
    const dislike = await this.recipeModel.findByIdAndUpdate(recetaID, { $inc: {dislikes: 1} }, {new:true});

    return dislike;
  }
}
