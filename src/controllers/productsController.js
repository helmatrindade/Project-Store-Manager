const productsService = require('../services/productsService');

const productsAll = async (_req, res) => {
  const products = await productsService.productsAll();
  return res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const productId = await productsService.findById(Number(id));

  if (!productId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productId);
};

const createProduct = async (req, res) => {
  const product = req.body;
  const result = await productsService.createProduct(product);

  if (result.type) {
    return res.status(result.status).json(result.message);
  }
  return res.status(201).json(result.message);
};

module.exports = {
  productsAll,
  findById,
  createProduct,
};
