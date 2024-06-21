import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

const BrazilMap = () => {
  const svgRef = useRef(null);
  const [selectedState, setSelectedState] = useState(null);

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

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fititnt/gis-dataset-brasil/master/uf/topojson/uf.json"
    )
      .then((response) => response.json())
      .then((topoData) => {
        const width = 700;
        const height = 700;

        const projection = d3.geoMercator().scale(900).center([-45, -9]);
        const path = d3.geoPath().projection(projection);
        const svg = d3
          .select(svgRef.current)
          .attr("width", width)
          .attr("height", height);

        svg.selectAll("*").remove();

        const brasil = feature(topoData, topoData.objects.uf);

        const stateDataMap = new Map(data.map((d) => [d.state, d.value]));

        const colorScale = d3
          .scaleSequential(
            d3.extent(data.map((d) => d.value)),
            d3.interpolateBlues
          )
          .nice();

        svg
          .selectAll("path")
          .data(brasil.features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", (d) => colorScale(stateDataMap.get(d.id)))
          .attr("stroke", "#fff")
          .attr("class", "state")
          .on("click", (event, d) => handleClick(d))
          .append("title")
          .text(
            (d) => `${d.properties.name}: ${stateDataMap.get(d.id).toFixed(3)}`
          );
      });
  }, [data]);

  const handleClick = (d) => {
    setSelectedState(d.id);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg
      .selectAll("path")
      .attr("fill", (d) => {
        if (d.id === selectedState) {
          return "blue";
        }
        return null;
      })
      .attr("opacity", (d) => (d.id === selectedState ? 1 : 0.5));
  }, [selectedState]);

  return <svg ref={svgRef}></svg>;
};

export default BrazilMap;
