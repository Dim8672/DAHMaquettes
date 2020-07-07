// The svg
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
 var projection = d3.geoMercator()
    .center([9, 46.5])                // GPS of location to zoom on
    .scale(6000)                       // This is like the zoom
    .translate([ width/2, height/2 ])



// Create data for circles:
var markers = [
  {long: 6.9667, lat: 46.95, group: "Tourisme", size: 5}, // NE
  {long: 7.3333, lat: 47.3667, group: "Tourisme", size: 4}, // JU
  {long: 6.9667, lat: 46.95, group: "Banque", size: 3}, // NE
  {long: 7.3333, lat: 47.3667, group: "Banque", size: 2}, // JU
  {long: 6.9667, lat: 46.95, group: "Santé", size: 1}, // NE
  {long: 7.3333, lat: 47.3667, group: "Santé", size: 5} // JU
];

// Load external data and boot
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){

    // Filter data
    data.features = data.features.filter( function(d){return d.properties.name=="Switzerland"} )

    // Create a color scale
    var color = d3.scaleOrdinal()
      .domain(["Tourisme", "Banque", "Santé" ])
      .range([ "#33FF3F", "#3374FF", "#FF5733"])

    // Add a scale for bubble size
    var size = d3.scaleLinear()
      .domain([2,10000])  // What's in the data
      .range([ 4, 100000])  // Size in pixel

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
          .attr("fill", "#b8b8b8")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "black")
        .style("opacity", .3)

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(markers)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", function(d){ return size(d.size) })
        .style("fill", function(d){ return color(d.group) })
        .attr("stroke", function(d){ return color(d.group) })
        .attr("stroke-width", 3)
        .attr("fill-opacity", .4)
})