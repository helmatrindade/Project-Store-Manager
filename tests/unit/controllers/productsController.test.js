const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const productsController = require('../../../src/controllers/productsController');
const productsService = require('../../../src/services/productsService');

chai.use(sinonChai);

describe('Test products Controller', function () {
  afterEach(() => sinon.restore());
  it('Retorne a lista de produtos', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.productsAll(req, res);

    expect(res.status).to.have.been.calledOnceWith(200);
  });

  it('Retorne apenas um produto pelo Id', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledOnceWith(200);
  });

  it('Retorne um erro 404 se produto não for encotrado', async function () {
    sinon.stub(productsService, 'findById').resolves(null);

    const req = { params: { id: 5 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found'});
  });
});





