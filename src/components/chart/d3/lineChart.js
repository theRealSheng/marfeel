import * as d3 from 'd3';

const LineChart = (data, id) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 20 };
  const width = 150;
  const height = 50;

  // create svg
  const svg = d3.select("#line-chart-" + id)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," +margin.right + ")");
  
  // line function
  const line = d3.line()
    .x(function (d) { return x(d) })
    .y(function (d) { return y(d) });

  function x(data){
    return data.values.date;
  }

  function y(data){
    return data.values.value;
  }

  svg.append("g")
    .append("text", data.title)
    .attr("fill", data.color)
    .attr("transform", "rorate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")

  // create the line
  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line)
    .style("fill", d => d3.color(data.color))
}

export default LineChart;