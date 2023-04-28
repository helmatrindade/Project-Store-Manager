const verificaSales = (sale, saleId)

const insertSales = async (saleId, productId, quantity) => {
  const salesId = await productsModel.insertSales({
    saleId,
    productId,
    quantity,
  });
};

module.exports = {
  insertSales,
};
