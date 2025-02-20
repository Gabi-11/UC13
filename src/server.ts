import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

let usuarios: object[] = [
  {"nome": "Gabriel"}
]

let sobre: object[] = [
  {"nome completo": "Gabriel de Graaf", "idade": "18", "descricao": "Sou estudante do curso de Desenvolvimento de Sistemas no Senac"}
]
app.use(express.json());

const porteiroMiddleware = (req: Request, res: Response, next: Function) => {
  console.log(`📢 Requisição recebida em: ${req.url}`);
  next(); // Permite a requisição continuar para a rota
};

app.use(porteiroMiddleware);

// 🔹 Rota GET (Buscar dados)
app.get('/usuarios', (req: Request, res: Response) => {
  res.status(200).json({ mensagem: 'Lista de usuários' });
});

// 🔹 Rota GET (Buscar dados)
app.get('/sobre', (req: Request, res: Response) => {
  res.status(200).json({ mensagem: 'Lista de usuários' });
});

// 🔹 Rota POST (Criar novo usuário)
app.post('/usuarios', (req: Request, res: Response) => {
  const { nome } = req.body as {nome: string};
  if (!nome) {
    res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  } else{
    res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
  }
});

app.post('/sobre', (req: Request, res: Response) => {
  const { nomecompleto } = req.body as {nomecompleto: string};
  if (!nomecompleto) {
    res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  } else{
    res.status(201).json({ mensagem: `Usuário ${nomecompleto} criado com sucesso!` });
    res.status(201).json({ mensagem: `Idade Usuário ${nomecompleto}` });
    res.status(201).json({ mensagem: `Descrição: ${nomecompleto}` });
  }
  }
);

app.listen(PORT, () => console.log(`🔥 Servidor rodando em http://localhost:${PORT}`));