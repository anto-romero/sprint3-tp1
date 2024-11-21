import express from "express";
import { connectDB } from "./src/config/dbConfig.mjs";
import superHeroRoutes from "./src/routes/superHeroRoutes.mjs";
import { medio1, medio2 } from "./src/middlewares/index.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware para parsear a JSON
app.use(express.json());

//conexion a MONGODB
connectDB();

/*app.use((req, res, next) => {
  if (!req.headers.token) {
    res.status(400).send("token no enviado")
  } 
  
  next()
})*/


//configuracion de las rutas
app.use("/api", superHeroRoutes);

//manejo de errores para rutas no encontradas
app.use((req,res) =>{
  res.status(404).send({mensaje: "Ruta no encontrada"})
})

//iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
