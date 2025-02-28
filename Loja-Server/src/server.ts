import express, {Application} from "express";
import usarioRoutes from "./routes/UsuarioRoutes";
import produtoRoutes from "./routes/ProdutoRoutes"

const app: Application = express();
app.use(express.json());

app.use("/api", usarioRoutes);
app.use("/api", produtoRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"))