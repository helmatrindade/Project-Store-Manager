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
};

const upDateById = async (pruductId, name) => {
  const id = await productsModel.findById(pruductId);

  if (id === undefined) {
    return { type: 'error' };
  }

  await productsModel.upDateById(pruductId, name);
  return { type: null };
};

const deleteProductById = async (deleteId) => {
  const id = await productsModel.findById(deleteId);

  if (id === undefined) {
    return { type: 'error' };
  }

  await productsModel.deleteProductById(deleteId);
  return { type: null };
};

module.exports = {
  productsAll,
  findById,
  createProduct,
  upDateById,
  deleteProductById,
};
