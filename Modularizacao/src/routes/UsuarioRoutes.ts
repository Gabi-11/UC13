import { Usuario } from "../models/usuario";
import { Router, Request, Response } from "express";

const router = Router();
let usuarios: Usuario[] = [];

router.post('/usuarios' ,(req: Request, res: Response ) => {
    const {id, nome, email} = req.body;

    if(!id || !nome || !email) {
        res.status(400).json({mensagem: "Todas as chaves são obrigatórias"});
        return
    } else {
        const novoUsuario = new Usuario(id, nome, email);
        usuarios.push(novoUsuario);
        res.status(201).json({mensagem: "Usuário criado com sucesso!", usuario:novoUsuario});
        return
    }
})

router.get("/usuarios", (req: Request, res: Response) => {
    res.status(200).json(usuarios);
    return
  });

export default router;


