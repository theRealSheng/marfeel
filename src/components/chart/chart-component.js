import Chart from '../../models/chart';
import View from '../../views/index';

class ChartComponent {
  constructor() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('./data.json', { mode: 'no-cors' });
      let data = await response.json();
      
      if (!data) {
        throw new TypeError("Sorry! There was a problem retrieving the data, please try again");
      } else {
        const charts = await this.createChart(data)
        if(charts) {
          return this.createView(charts)
        }
      }
    } catch(err) {
      console.log(err);
      throw new TypeError("Oops! Something went wrong, please try again");
    }
  }

  createChart (info) {
    return info.data.map((data, index) => new Chart(data, index))
  }

  createView (data) {
    return data.map(chart => { 
      const view = new View(chart);
      view.render();
    })
  }
}

export default ChartComponent;
