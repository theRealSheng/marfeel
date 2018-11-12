import * as d3 from 'd3';

const DonutChart = (data, id) => {
  if(data) {
    const [width, height, innerRadius, outerRadius] = [200, 200 , 90 , 100];
    const title = data.title;
    const total = (data.title === 'REVENUE' ? data.total + ' €' : data.total);
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
  
    // create pie
    const pie = d3.pie()
      .sort(null)
      .value(d => d.value);

    // create donut svg
    var svg = d3.select("#donut-chart-" + id)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    
    // create donut
    var g = svg.selectAll("svg")
    .data(pie(data.donutData))
    .enter()
    .append("g")
    
    g.append("path")
    .attr("d", arc)
    .style("fill", d => d3.color(d.data.color))
    
    g.append("text")
    .attr("text-anchor", "middle")
    .attr("font-size", "1.3em")
    .attr("fill", "grey")
    .attr("font-weight", "400")
    .attr("y", -20)
    .text(title);
    
    g.append("text")
    .attr("text-anchor", "middle")
    .attr("font-size", "1.6em")
    .attr("y", 10)
    .text(total)
  }
}

export default DonutChart;