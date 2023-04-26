const productsModel = require('../models/productsModel');

const productsAll = async () => {
  const products = await productsModel.productsAll();
  return products;
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  return product;
};

module.exports = {
  productsAll,
  findById,
};
