class Usuario {
    constructor(public id: number, public nome: string, public email: string) {}
  }
  
  const usuarios: Usuario[] = [];

import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.post('/usuarios', (req: Request, res: Response) => {
  const { id, nome, email } = req.body;
  const novoUsuario = new Usuario(id, nome, email);
  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: "Usuário criado com sucesso!", usuario: novoUsuario });
});

app.get('/usuarios', (req: Request, res: Response) => {
  res.status(200).json(usuarios);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));