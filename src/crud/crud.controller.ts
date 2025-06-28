import { Controller, Get, Post, Res, HttpStatus, Body, Param, Put, Delete } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('api')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  //CRUD USUARIOS
  @Get('usuarios/:id')
  async getUser(@Res() respuesta, @Param('id') id) {
    const dataToSend = { _id: id };
    const user = await this.crudService.getUsers(dataToSend);
    if(user == null) {
      return respuesta.status(HttpStatus.OK).json({ status: false, data: "Usuario no existe" });
    }
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: user
    });
  }

  @Post('usuarios')
  async createUser(@Res() respuesta, @Body() usuarioNuevo) {
    const newRecipe = await this.crudService.insertUser(usuarioNuevo);
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Usuario agregado con exito"
    });
  }

  @Put('usuarios/:id')
  async updateUser(@Res() respuesta, @Body() dataUser, @Param('id') userID) {
    const updatedUser = await this.crudService.updateUser(userID, dataUser);
    
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Usuario actualizado con exito"
    });
  }

  @Delete('usuarios/:id')
  async deleteUser(@Res() respuesta, @Param('id') userID) {
    const deletedUser = await this.crudService.deleteUser(userID);
    
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Usuario eliminado con exito"
    });
  }



  //CRUD INGREDIENTES
  @Get('ingredientes')
  async getINGs(@Res() respuesta) {
    const ings = await this.crudService.getIngredientes();

    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: ings
    });
  }

  @Post('ingredientes')
  async createING(@Res() respuesta, @Body() ingNuevo) {
    const ing = await this.crudService.insertIng(ingNuevo);

    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Ingrediente agregado con exito"
    });
  }

  @Put('ingredientes/:id')
  async updateINGs(@Res() respuesta, @Body() newData, @Param('id') ingID) {
    const ing = await this.crudService.updateIng(ingID, newData);
    
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Ingrediente actualizado con exito"
    });
  }

  @Delete('ingredientes/:id')
  async deleteING(@Res() respuesta, @Param('id') ingID) {
    const ing = await this.crudService.deleteIng(ingID);
    
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Ingrediente eliminado con exito"
    });
  }



  //CRUD RECETAS
  @Get('recetas')
  async getRecipe(@Res() respuesta) {
    const recetas = await this.crudService.getRecipes();
    if(recetas == null) {
      return respuesta.status(HttpStatus.OK).json({ status: false, data: "No hay recetas que mostrar" });
    }
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: recetas
    });
  }

  @Post('recetas/:id')
  async createRecipe(@Res() respuesta, @Body() recetaNueva, @Param('id') userID) {
    const newRecipe = await this.crudService.insertRecipe({...recetaNueva, id_creador: userID});

    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Receta agregada con exito"
    });
  }

  @Put('recetas/like/:id')
  async Like(@Res() respuesta, @Param('id') recetaID) {
    await this.crudService.recetaLike(recetaID);
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "Te ha gustado esta receta"
    });
  }

  @Put('recetas/dislike/:id')
  async Dislike(@Res() respuesta, @Param('id') recetaID) {
    await this.crudService.recetaDislike(recetaID);
    return respuesta.status(HttpStatus.OK).json({
      status: true,
      data: "No te ha gustado esta receta"
    });
  }


}
