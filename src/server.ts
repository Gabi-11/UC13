import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

const logger = (req: Request, res: Response, next: Function) => {
  const data: String = new Date().toISOString();
  console.log(`📢 Requisição recebida em: ${req.url}`);
  next(); // Permite a requisição continuar para a rota
};


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
  res.status(200).json({
    nome: "Gabriel",
    idade: 18,
    descricao: "Aluno do Curso"
  })

});

app.listen(PORT, () => console.log(`🔥 Servidor rodando em http://localhost:${PORT}`));