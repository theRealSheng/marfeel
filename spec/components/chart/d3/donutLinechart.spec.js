// import ChartComponent from '../../../src/components/chart/chart-component';

// describe('D3 chart creation', function () {

//   it('DonutLineChart: test D3', function () {
//     // Color for charts
//     const chartColor = {
//       REVENUE: {
//         Smartphone: "#466422",
//         Tablet: "#53C936",
//         default: "#53C936"
//       }
//     }

//     const donutData = [
//       {
//       "color": "#466422",
//       "name": "Smartphone",
//       "value": 80000 
//     },
//     {
//       "color": "#53C936",
//       "name": "Tablet",
//       "value": 120000
//     }]

//     const data = {
//       title: "REVENUE",
//       total: "200.000",
//       colorLine: chartColor['REVENUE']['default'],
//       donutLine: donutData
//     }

//     beforeEach(function () {
//       c = ChartComponent.DonutLineChart(data, 0);
//       c.render();
//     });

//     afterEach(function () {
//       d3.selectAll('svg').remove();
//     });

//     describe('the svg', function () {
//       it('should be created', function () {
//         expect(getSvg()).not.toBeNull();
//       });

//       it('should have the correct height', function () {
//         expect(getSvg().attr('width')).toBe('200');
//       });

//       it('should have the correct width', function () {
//         expect(getSvg().attr('width')).toBe('200');
//       });
//     });

//   });
// });