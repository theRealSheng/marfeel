import DonutChart from '../components/chart/d3/donutChart';
import LineChart from '../components/chart/canvas/lineChart';

class View {
  constructor(data) {
    this.data = data;
  }

  formatAmount(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  createHMTL(html) {
    const div = document.createElement('div');
    div.classList.add('chart--container');
    div.innerHTML = html;
    return div;
  }

  createChartFooter(data, chartColor) {
    return data.devices.map((item, index) => 
        `<div class="footer--chart">
          <div class="footer--device" style="color:${chartColor[data.title][item.name]}">${item.name}</div>
          <div class="footer--chart--container">
            <span class="footer--chart-percentage">${data.calculateRatio(index) + '%'}</span> 
            <span class="footer--chart-amount">${this.formatAmount(item.amount)}${data.title==="Revenue"? ' €': ''}</span>
          </div>        
        </div>`
      ).join('')
  }

  createHTMLChart(data, chartColor) {
    return (
      `<div class="chart" id="donut-chart-${data.id}">
        <canvas class="canvas" id="line-chart-${data.id}"></canvas>
      </div>
      <div class="footer--data">
        ${this.createChartFooter(data, chartColor)}
      </div>`
    );
  }

  render() {
    // Color for charts
    const chartColor = {
      Revenue: {
        Smartphone: "#466422",
        Tablet: "#53C936",
        default: "#53C936"
      },
      Impressions: {
        Smartphone: "#355464",
        Tablet: "#13D6EC",
        default: "#13D6EC"
      },
      Visits: {
        Smartphone: "#B25E35",
        Tablet: "#EBC151",
        default: "#B25E35"
      }
    }

    const html = this.createHMTL(this.createHTMLChart(this.data, chartColor));
    document.getElementById('container').appendChild(html);

    // map the data per device
    const donutData = this.data.devices.map(data => ({
      name: data.name,
      value: data.amount,
      color: chartColor[this.data.title][data.name],
    }));

    // consolidate the data to create chart
    const data = {
      title: this.data.title.toUpperCase(),
      total: this.formatAmount(this.data.calculateTotal()),
      donutData
    }

    this.donutChart = DonutChart(data, this.data.id);
    this.lineChart = LineChart(chartColor[this.data.title]['default'], this.data.id)
  }
}

export default View;