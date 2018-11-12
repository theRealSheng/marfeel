import Chart from '../../src/models/chart';

describe('Chart Model', function () {

  it('calculateTotal: should return sum of number', function () {
    const data = {
      devices: [
        {amount: 400},
        {amount: 500}
      ]
    }
    const chart = new Chart(data);
    const check = chart.calculateTotal();
    expect(check).toEqual(900);
  });

  it('calculateRatio: should return the percentage amount from total', function () {
    const data = {
      devices: [
        {amount: 500},
        {amount: 500}
      ]
    }

    const chart = new Chart(data);
    const index = 0;
    const check = chart.calculateRatio(index);
    expect(check).toEqual(50);
  });


})