import ChartComponent from '../../../src/components/chart/chart-component';

describe('D3 chart creation', function () {

  it('DonutLineChart: test D3', function () {
    // Color for charts
    const chartColor = {
      REVENUE: {
        Smartphone: "#466422",
        Tablet: "#53C936",
        default: "#53C936"
      }
    }

    const donutData = [
      {
      "colorDonut": "#466422",
      "colorLine": "#53C936",
      "name": "Smartphone",
      "value": 80000 
    },
    {
      "colorDonut": "#53C936",
      "colorLine": "#53C936",
      "name": "Tablet",
      "value": 120000
    }]

    const data = {
      history: [
        { "date": "2018-10-01T00:00:00", "value": 93.24},
        { "date": "2018-10-06T00:00:00", "value": 95.35},
        { "date": "2018-10-11T00:00:00", "value": 98.84},
        { "date": "2018-10-16T00:00:00", "value": 99.92},
        { "date": "2018-10-21T00:00:00", "value": 99.80},
        { "date": "2018-10-26T00:00:00", "value": 99.47},
        { "date": "2018-10-31T00:00:00", "value": 99.47}
      ],
      title: "REVENUE",
      total: "200.000",
      colorLine: chartColor['REVENUE']['default'],
      donutLine: donutData
    }

    beforeEach(function () {
      c = DonutLineChart(data, 0);
      c.render();
    });

    afterEach(function () {
      d3.selectAll('svg').remove();
    });

    describe('the svg', function () {
      it('should be created', function () {
        expect(getSvg()).not.toBeNull();
      });

      it('should have the correct height', function () {
        expect(getSvg().attr('width')).toBe('200');
      });

      it('should have the correct width', function () {
        expect(getSvg().attr('width')).toBe('200');
      });
    });

  });
});