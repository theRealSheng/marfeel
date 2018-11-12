import View from '../../src/views/index';

describe('View', function () {

  it('formatAmount: should add decimal point for every thousand', function () {
    const data = {
      "devices": [{
        "amount": 800000000
      }]
    }
    const view = new View(data);
    const check = view.formatAmount(data.devices[0].amount);
    expect(check).toEqual('800.000.000');
  });

});