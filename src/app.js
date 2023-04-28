const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const { validateProduct } = require('./middlewares/productValidator');

const app = express();

app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.productsAll);

app.get('/products/:id', productsController.findById);

app.post('/products', validateProduct, productsController.createProduct);

// app.post('/sales');

app.get('/sales', salesController.getSales);

app.get('/sales/:id', salesController.getSalesId);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
