const salesService = require('../services/salesService');

const getSales = async (_req, res) => {
  const sales = await salesService.getSales();
  return res.status(200).json(sales);
};

const getSalesId = async (req, res) => {
  const { id } = req.params;
  const saleIdResult = await salesService.getSalesId(Number(id));

  if (saleIdResult.length < 1) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(saleIdResult);
};

const deleteSalesById = async (req, res) => {
  const { id } = req.params;

  const { type } = await salesService.deleteSalesById(Number(id));

  if (type === 'error') {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return res.status(204).json();
};

module.exports = {
  getSales,
  getSalesId,
  deleteSalesById,
};
