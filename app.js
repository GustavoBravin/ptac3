const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1 , nome:"Bolinha",preço: 10, imagem:"bola.png"},
  {id:2 , nome:"Bola amarela",preço: 15, imagem:"bola amarela.png"},
  {id:3 , nome:"Bola verde",preço: 11, imagem:"bola verde.jpg"},
  {id:4 , nome:"Bola azul",preço: 12, imagem:"bola azul.jpg"},
  {id:5 , nome:"Bola rosa",preço: 13, imagem:"bola rosa.jpg"},
  {id:6 , nome:"Bola branca",preço: 14, imagem:"bola branca.png"},
  {id:7 , nome:"Bola preta",preço: 16, imagem:"bola preta.jpg"},
  {id:8 , nome:"Bola marrom",preço: 17, imagem:"bola marrom.jpg"},
  {id:9 , nome:"Bola nike",preço: 18, imagem:"bola nike.jpg"},
  {id:10 , nome:"Bola adidas",preço: 19, imagem:"adidas.jpg"},
  
]


function buscarProdutoPorId(id) {
  console.log(id)
  const produto = produtos.find(produto => produto.id = id);
  return produto || null
}


app.get('/', (req, res) => {
  res.render('index', { produtos });
});
app.get('/produto/:id', (req, res) => {
  const produto = buscarProdutoPorId(req.params.id)
  console.log(produto)
  res.render('produto', {produto});
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


