// basico de javascrip

//console.log(__dirname)
// criar objetos: tipo nome = { propriedades do objeto separadas por vírgula ou funcionalidade(){o que ela faz}}
// npm= gerenciador de pacotes
// npm init -y = inicia esse npm e responde sim pra tudo q ele vier a perguntar
// npm start - no terminal para começar  rodar pelo npm

//express cria e configura o servidor
const express = require("express")
const server=express()


//fazendo arrays de ideias

 const ideas =[
     {
         img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
         title:"Cursos de programação",
         category:"Estudo",
         description:"Lorem ipsum dolor sit amet, consectetur adipisicin",
         url:"http://rocketseat.com.br"
     },
     {
        img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title:"Exercícios",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicin",
        url:"http://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title:"Meditação",
        category:"Mentalidade",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicin",
        url:"http://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title:"Karaokê",
        category:"Diversão em família",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicin",
        url:"http://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title:"Pintura",
        category:"Criatividade",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicin",
        url:"http://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title:"Recortes",
        category:"Criatividade",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicin",
        url:"http://rocketseat.com.br"
    },
 ]

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//config do nunjucks - variaveis no html

const nunjucks =require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//criar uma rota
//capturo o pedido do cliente para responder
server.get("/", function(req,res){

    const reversedIdeas = [...ideas].reverse() //espalha o conteudo de ideas nessa nova variavel
    let lastIdeas=[]
    for( let idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }


    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideias", function(req,res){

    const reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas: reversedIdeas})
})


//ligar servidor na porta 3000
server.listen(3000)