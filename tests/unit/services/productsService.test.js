const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');
// const { getProductsAll } = require('../models/mock/productsModelMock');


describe('Test products Service', function () {
  afterEach(() => sinon.restore());
  it('test productsAll', async function () {
    sinon.stub(productsModel, 'productsAll').resolves([
      { id: 1, name: "Martelo de Thor" },
      { id: 2, name: "Traje de encolhimento" }
    ]);

    const products = await productsService.productsAll();

    expect(products).to.be.an('array');
    expect(products).to.have.length(2);
  });

  it('test find by Id', async function () {
    sinon.stub(productsModel, 'findById').resolves({ id: 2, name: 'Traje de encolhimento' });

    const product = await productsService.findById();

    expect(product).to.deep.equal({ id: 2, name: 'Traje de encolhimento' });
  });
});
