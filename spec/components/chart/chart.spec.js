import ChartComponent from '../../../src/components/chart/chart-component';

describe('Chart component', function () {

  it('fetchData: should fetch data before 1500 milisecond', function () {
    setTimeout(function () {
      ChartComponent.fetchData();
      done();
    }, 1500);
  });
});