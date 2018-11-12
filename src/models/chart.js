class Chart {
  constructor(data, index) {
    this.id = index;
    this.title = data.title;
    this.devices = data.devices;
    this.history = data.history;
  }

  calculateTotal() {
    return this.devices.reduce((acc, device) => acc + device.amount, 0);
  }

  calculateRatio(index) {
    return Math.round(this.devices[index].amount / this.calculateTotal() * 100);
  }
}

export default Chart;