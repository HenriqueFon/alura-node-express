import app from './src/app.js'

//ou porta ambiente produção ou a padrão
const port=process.env.port || 8000;

app.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})

