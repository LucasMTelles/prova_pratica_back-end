/*
//Atividade 01

const http = require('http')
const os = require('os')

const PORT = 3000

const objeto = [
    {id: 1, nome: os.type()},
    {id: 2, totaldememoria: os.totalmem()},
    {id: 3, diretorioatual: os.homedir()},
]

const json = JSON.stringify(objeto)
console.log(json)

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'application/json')
})

server.listen(PORT, ()=>{
    console.log('respostas da atividade')
})
*/




/*
//Atividade 02

const path = require('path')
const caminho = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

//a)
const nome = path.dirname(caminho)
console.log(nome)

//b)
const ext = path.extname(caminho)
console.log(ext)

//c)
const absolute = path.isAbsolute(caminho)
console.log(absolute)

//d)
const objeto = {
    root:'',
    dir: path.dirname(caminho),
    base: path.basename(caminho),
    ext: path.extname(caminho),
    name: path.basename(caminho, path.extname(caminho))
}

console.log(objeto)
*/




/*
//Atividade 03

const url = require('url')

const objeto = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    hostname: 'nodejs.org',
    hash: '#url_new_url_input_base',
    search: null,
    query = [Object: null prototype] {},
    pathname: '/api/url.html',
    path: '/api/url.html',
    href: 'https://nodejs.org/api/url.html#url_new_url_input_base',
}

const urlfinal = url.join(objeto)
console.log(urlfinal)
*/





/*
//Atividade 04

const fs = require('fs')

const arquivo = 'arquivo.txt'
const arquivonovo = 'arquivonovo.txt'
const arquivorenomeado = fs.rename(arquivo, arquivonovo, (err)=>{
    if (err){
        console.log(err);
    }
    console.log('O arquivo foi renomeado')
})

console.log(arquivorenomeado)
*/




//Atividade 05

const os = require('os')

const cpus = os.cpus()
console.log(cpus)