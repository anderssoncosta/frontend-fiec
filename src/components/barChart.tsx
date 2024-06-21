import { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  { state: "SP", value: 0.859 },
  { state: "RJ", value: 0.469 },
  { state: "RS", value: 0.451 },
  { state: "SC", value: 0.438 },
  { state: "PR", value: 0.395 },
  { state: "MG", value: 0.354 },
  { state: "DF", value: 0.283 },
  { state: "PE", value: 0.255 },
  { state: "ES", value: 0.254 },
  { state: "AM", value: 0.253 },
  { state: "CE", value: 0.228 },
  { state: "BA", value: 0.21 },
  { state: "GO", value: 0.204 },
  { state: "RN", value: 0.191 },
  { state: "SE", value: 0.191 },
  { state: "PB", value: 0.175 },
  { state: "MS", value: 0.165 },
  { state: "MT", value: 0.153 },
  { state: "RO", value: 0.15 },
  { state: "PA", value: 0.138 },
  { state: "RR", value: 0.119 },
  { state: "MA", value: 0.119 },
  { state: "AC", value: 0.112 },
  { state: "AL", value: 0.104 },
  { state: "PI", value: 0.104 },
  { state: "AP", value: 0.089 },
  { state: "TO", value: 0.068 },
];

const BarChart = () => {
  const chartRef = useRef();
  data.sort((a, b) => a.value - b.value);

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr("width", 400)
      .attr("height", 600);

    const margin = { top: 20, right: 30, bottom: 40, left: 90 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, (d) => d.value)]);

    const y = d3
      .scaleBand()
      .range([height, 0])
      .padding(0.3)
      .domain(data.map((d) => d.state));

    const colorScale = d3
      .scaleSequential(d3.extent(data.map((d) => d.value)), d3.interpolateBlues)
      .nice();

    g.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5));

    g.append("g").attr("class", "y axis").call(d3.axisLeft(y));

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("height", y.bandwidth())
      .attr("y", (d) => y(d.state))
      .attr("width", (d) => x(d.value))
      .attr("fill", (d) => colorScale(d.value));
  }, []);

  return <svg ref={chartRef}></svg>;
};
export default BarChart;
