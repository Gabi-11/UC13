import express, {Application} from "express";
import usuarioRoutes from "./routes/UsuarioRoutes";

const app: Application = express();

app.use(express.json());

app.use("/api", usuarioRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"));