const productsModel = require('../models/productsModel');

const productsAll = async () => {
  const products = await productsModel.productsAll();
  return products;
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  return product;
};

const createProduct = async (product) => {
  const newProduct = await productsModel.create(product);
  return { type: null, message: newProduct };
  // return newProduct;
};

module.exports = {
  productsAll,
  findById,
  createProduct,
};
