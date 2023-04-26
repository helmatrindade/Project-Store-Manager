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

module.exports = {
  productsAll,
  findById,
};
