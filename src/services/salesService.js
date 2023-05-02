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
  const sale = await saleModel.getSalesId(id);
  return sale;
};

const deleteSalesById = async (id) => {
  const sale = await saleModel.getSalesId(id);

  if (sale.length < 1) {
    return { type: 'error' };
  }

  await saleModel.deleteSalesById(id);
  return { type: null };
};

module.exports = {
  // insertSales,
  getSales,
  getSalesId,
  deleteSalesById,
};
