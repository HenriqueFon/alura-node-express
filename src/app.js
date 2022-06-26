import express from "express";
import db from "./config/dbConnect.js"

db.on("error",console.log.bind(console,'Erro de conexão'))

//Inicia a conexão com o banco
db.once("open",()=>{
    console.log('conexão com o banco feita com sucesso')
})

//arquivo de rotas
const app=express();

//recurso js que interpreta arquivos do tipo json
app.use(express.json())

const books=[
    {id:1,"titulo": "Senhor dos Aneis"},
    {id:2,"titulo": "Harry Potter"}
]
//get => select
//post => Insert
//PUT => Update
//definindo rotas, rota padrão: como uma index
app.get('/', (req,res)=>{
    //codigo 200 quer dizer que servidor está ok, função send exibe msg
    res.status(200).send('Curso Node');
})

app.get('/livros',(req,res)=>{
    //resposta ok, retorno um json com os valores dos livros
    res.status(200).json(books)
})

app.get('/livros/:id',(req,res)=>{
    //variável index recebe o resultado da função busca livro, passando como parametro
    //req.param.id, id que é parametro da requisição
    let index = buscaLivro(req.params.id);
    res.json(books[index]);
})



//Metodo post vai adicionar uma nova requisição(livro) na rota livros
app.post('/livros',(req,res) => {
    books.push(req.body);
    //código 201 para criação com sucesso
    res.status(201).send('Livro foi cadastrado com sucesso');    
})


app.put('/livros/:id',(req,res)=>{
    //variável index recebe o resultado da função busca livro, passando como parametro
    //req.param.id, id que é parametro da requisição
    //(req.params.id-1);
    let index =buscaLivro(req.params.id)
    books[index].titulo=req.body.titulo;
    //substitui o titulo do livro pelo titulo do corpo da requisição dentro do
    //index
    res.json(books);
})

app.delete('/livros/:id',(req,res)=>{
    let {id}=req.params;
    let index =buscaLivro(id)
    books.splice(index,1);
    res.send(`Livro ${id} removido com sucesso`);
})

function buscaLivro(id){
    return books.findIndex(books => books.id == id)
    //books.findIndex, lambda function que verifica dentro doslivros se o id do livro é igual
    //ao ID digitado.
}

//Exportar dados da página app para que outro arquivo possa utilizar
export default app

