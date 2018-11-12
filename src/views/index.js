import DonutChart from '../components/chart/d3/donutChart';
import LineChart from '../components/chart/d3/lineChart';

class View {
  constructor(data) {
    this.data = data;
  }

  formatAmount(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  createHMTL(html) {
    const div = document.createElement('div');
    div.classList.add('chart-container');
    div.innerHTML = html;
    return div;
  }

  createFooter(data, chartColor) {
    return data.devices.map((item, index) => 
        `<div class="device--container">
          <div class="device-name" style="color:${chartColor[data.title][item.name]}">${item.name}</div>
          <div class="device-data">
            <span class="device-data-left">${data.calculateRatio(index) + '%'}</span> 
            <span class="device-data-right">${this.formatAmount(item.amount)}</span>
          </div>        
        </div>`
      ).join('')
  }

  createHTMLChart(data, chartColor) {
    return (
      `<div class="chart" id="donut-chart-${data.id}">
      <canvas class="canvas" id="line-chart-${data.id}"></canvas>
      </div>
      <div class="chart--container">
        <h2 class="chart--title">${data.title}</h2>
        <p class="chart--amount">${this.formatAmount(data.calculateTotal())} ${data.title==='Revenue'? '€' : ''}</p>
      </div>
      <div class="donut--container">
        ${this.createFooter(data, chartColor)}
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

    const donutData = this.data.devices.map(data => ({
      name: data.name,
      value: data.amount,
      color: chartColor[this.data.title][data.name]
    }));

    const lineData = {
      values: this.data.history,
      title: this.data.title,
      total: this.data.calculateTotal(),
      color: chartColor[this.data.title]['default']
    };

    this.donutChart = DonutChart(donutData, this.data.id);
    this.lineChart = LineChart(lineData, this.data.id);
  }
}

export default View;