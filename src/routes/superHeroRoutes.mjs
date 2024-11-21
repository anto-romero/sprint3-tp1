import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  crearNuevoSuperheroeController, //controlador crear superheroe
  actualizarSuperheroeController,
  //actualizarDatosController,
  eliminarSuperheroeController, //controlador eliminar superheroe por ID
  eliminarSuperheroePorNombreController //controlador eliminar superheroe por nombre
} from "../controllers/superheroesController.mjs";

const router = express.Router();

//router.use(medio1);

router.get(
  "/heroes/mayores-30",obtenerSuperheroesMayoresDe30Controller
);
router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get("/heroes/:atributo/:valor", buscarSuperheroesPorAtributoController);
router.post("/heroes/crear/nuevo", crearNuevoSuperheroeController);
router.put("/heroes/actualizar/heroe/:id", actualizarSuperheroeController);
//router.put("/heroes/actualizar/:id", actualizarDatosController);
router.delete("/heroes/eliminar/:id", eliminarSuperheroeController);
router.delete("/heroes/delete/:nombre", eliminarSuperheroePorNombreController)


export default router;
