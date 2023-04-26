const connection = require('./connection');

const productsAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
  );
  return products;
};

const findById = async (Id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [Id],
  );
  return product;
};

module.exports = {
  productsAll,
  findById,
};
