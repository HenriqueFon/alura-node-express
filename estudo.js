const fs=require('fs');

function trataErro(erro){
    throw new Error(console.log(erro.code,'Não há o arquivo no caminho'));
}

pegaArquivoNormal=(filepath)=>{
    const encoding='utf-8'
    //primeiro parametro caminho do arquivo
    //segundo parametro enconding do arquivo
    //terceiro parametro callback function, 1º parametro da callback erro,2º sucesso
    
    fs.readFile(filepath,encoding,(erro, texto) =>{
        if(erro){
            trataErro(erro);
        }
        console.log(texto);
    })
}
pegaArquivoNormal('./arquivos/texto.txt');

/*promises são asincronas, ou seja enquanto metodos sincronos é um bate e volta de perguntas e respostas
promises são como o wpp vc manda uma msg mas não necessáriamente tem uma resposta imediata.*/
/*pegaArquivoPromise=(caminhoDoArquivo) => {
    const enconding='utf-8';
    //quando a promise é cumprida, then é a callback que manipula o resultado
    fs.promises.readFile(caminhoDoArquivo,enconding)//pegue os dados desse arquivo
    .then((texto)=> console.log(texto))//quando estiver pronto me entregue o texto
    .catch((erro)=> trataErro(erro))//caso erro execute função de erro
}
pegaArquivoPromise('./index.js');

async function pegaArquivoAsync(caminhoDoArquivo) {
    const enconding='utf-8';
    const texto=await fs.promises.readFile(caminhoDoArquivo,enconding);
    console.log(texto);
}*/