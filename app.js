const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1 , nome:"Bola",preço: 10, imagem:"bola.png"},
  {id:2 , nome:"Bola amarela",preço: 10, imagem:"bola amarela.png"},
  {id:3 , nome:"Bola verde",preço: 10, imagem:"bola verde.jpg"},
  {id:4 , nome:"Bola azul",preço: 10, imagem:"bola azul.jpg"},
  {id:5 , nome:"Bola rosa",preço: 10, imagem:"bola rosa.jpg"},
  {id:6 , nome:"Bola branca",preço: 10, imagem:"bola branca.png"},
  {id:7 , nome:"Bola preta",preço: 10, imagem:"bola preta.jpg"},
  {id:8 , nome:"Bola marrom",preço: 10, imagem:"bola marrom.jpg"},
  {id:9 , nome:"Bola nike",preço: 10, imagem:"bola nike.jpg"},
  {id:10 , nome:"Bola adidas",preço: 10, imagem:"adidas.jpg"},
  
]

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});
app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Bem Vindo!' });
});
app.get('/ver', (req, res) => {
  res.render('ver', { message: 'Bem Vindo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


