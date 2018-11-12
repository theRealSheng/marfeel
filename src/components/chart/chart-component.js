import Chart from '../../models/chart';
import View from '../../views/index';

class ChartComponent {
  constructor() {
    this.fetchData();
  }

  fetchData() {
    return fetch('./data.json', { mode: 'no-cors' })
      .then(res => {
        let contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json();
        }
        throw new TypeError("Sorry! There was a problem retrieving the data, please try again");
      })
      .then(result => this.createChart(result))
      .then(result => this.createView(result))
      .catch(err => console.log(err))
  }

  createChart (info) {
    return info.data.map((entry, index) => new Chart(entry, index))
  }

  createView (data) {
    return data.map(chart => { 
      const view = new View(chart);
      view.render();
    })
  }
}

export default ChartComponent;
