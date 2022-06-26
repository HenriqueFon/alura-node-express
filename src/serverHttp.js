//tipo de servidor
const http=require("http");
//porta do servidor
const port=3000;

//define um objeto de rotas one caso o usuário coloque na url a rota criada
//a msg será exibida
const rotas={
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Dados sobre a editora',
    '/sobre': 'Dados sobre o curso'
}

//metodo (req,res)//requisição,resposta
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(rotas[req.url]);
})
//Inicia um servidor escutando a porta de entrada do msm
server.listen(port,()=>{
    console.log(`Servidor escutando na porta:${port}, http://localhost:${port}`)
})
