const camelize = require('camelize');
const connection = require('./connection');

// const insertSales = async (sales) => {
//   // Obtenho as chaves de sales, e faço um map das chaves para um array de strings com nomes das chaves e junta as strings com virgula. 
//   const colums = Object.keys(snakeize(sales))
//     .map((key) => `${key}`).join(',');

//   // obtenho as chaves do objeto sales, faço map das chaves do objeto para um array de strings, a interrrogação é o valor que será inserido.
//   const placeholders = Object.keys(sales)
//     .map((_key) => '?').join(',');

//   // Aqui executa a consulta SQL , inerindo as strings geradas em colums e placeholders, e os valores do objeto sales.
//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO StoreManager.sales (${colums}) VALUE (${placeholders})`,
//     [...Object.values(sales)],
//   );
//   // uso as informações da tabela sales para preencher a tabela sales_products.
//   sales.products.forEach((product) => {
//     connection.execute(
//       'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
//       [insertId, product.id, product.quantity],
//     );
//   });

//   return insertId;
// };

const getSales = async () => {
  const [sales] = await connection.execute(
    `SELECT * FROM StoreManager.sales AS sale
    JOIN StoreManager.sales_products AS saleProduct
    ON saleProduct.sale_id = sale.id`,
  );
  return camelize(sales);
};

const getSalesId = async (id) => {
  const [salesId] = await connection.execute(
    `SELECT sale.date, saleProduct.product_id, saleProduct.quantity FROM StoreManager.sales AS sale
    JOIN StoreManager.sales_products AS saleProduct
    ON saleProduct.sale_id = sale.id
    WHERE id = ?;`,
    [id],
  );
  return camelize(salesId);
};

const deleteSalesById = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales_products WHERE sale_id = ?',
    [id],
  );
  return affectedRows;
};

module.exports = {
  // insertSales,
  getSales,
  getSalesId,
  deleteSalesById,
};
