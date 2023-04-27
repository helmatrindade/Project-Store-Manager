const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const productsModel = require('../../../src/models/productsModel');
const { getProductsAll } = require('./mock/productsModelMock');

describe('Test products Model', function () {
  afterEach(() => sinon.restore());
  it('test productsAll', async function () {
    sinon.stub(connection, 'execute').resolves([getProductsAll]);

    const result = await productsModel.productsAll();

    expect(result).to.be.an('array');
    expect(result).to.have.length(3);
  });

  it('test findById', async function () {
    sinon.stub(connection, 'execute').resolves([getProductsAll]);

    const product = await productsModel.findById(1, connection);

    expect(product).to.deep.equal({ id: 1, name: 'Martelo de Thor' });
  });
});
