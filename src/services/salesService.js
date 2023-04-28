const saleModel = require('../models/salesModel');

// const verificaSales = (sale, saleId)

// const insertSales = async (saleId, productId, quantity) => {
//   const salesId = await productsModel.insertSales({
//     saleId,
//     productId,
//     quantity,
//   });
// };

const getSales = async () => {
  const sales = await saleModel.getSales();
  return sales;
};

const getSalesId = async (id) => {
  console.log('service');
  const sale = await saleModel.getSalesId(id);
  return sale;
};

module.exports = {
  // insertSales,
  getSales,
  getSalesId,
};
