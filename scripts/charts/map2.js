var projection =
d3.geoMercator().center([7, 47])                // GPS of location to zoom on
.scale(14000)                       // This is like the zoom
;

var width = 960,
    height = 500;

    // Create data for circles:
    var markers = [
      {long: 6.7, lat: 46.95, group: "Tourisme", size: 3}, // NE
      {long: 7.3333, lat: 47.3667, group: "Tourisme", size: 2}, // JU
      {long: 6.7, lat: 46.95, group: "Banque", size: 3}, // NE
      {long: 7.3333, lat: 47.3667, group: "Banque", size: 2}, // JU
      {long: 6.7, lat: 46.95, group: "Santé", size: 1}, // NE
      {long: 7.3333, lat: 47.3667, group: "Santé", size: 2}, // JU
      {long: 7.85, lat: 46.6833, group: "Santé", size: 3},// Interlaken
      {long: 7.85, lat: 46.6833, group: "Banque", size: 2}, // Interlaken
      {long: 7.85, lat: 46.6833, group: "Tourisme", size: 4}, // Interlaken
      {long: 7.2441, lat: 47.1324, group: "Tourisme", size: 4}, // Bienne
      {long: 7.2441, lat: 47.1324, group: "Banque", size: 5}, // Bienne
      {long: 7.2441, lat: 47.1324, group: "Santé", size: 1} // Bienne
    ];

var path = d3.geoPath()
  .projection(projection);

  var size = d3.scaleLinear()
    .domain([2,10000])  // What's in the data
    .range([ 4, 100000])

var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height=+svg.attr("height");

d3.queue()
  .defer(d3.json, "ch-cantons.json")
  .defer(d3.json, "ne-municipalities-lakes.json")
  .defer(d3.json, "be-municipalities-lakes.json")
  .defer(d3.json, "ju-municipalities.json")
  .defer(d3.json, "vd-municipalities-lakes.json")
  .await(function(error, ch, ne, be, ju, vd){

    svg.append("path")
        .datum(topojson.feature(ch, ch.objects.cantons))
        .attr("class", "country")
        .attr("d", path);

     svg.append("path")
       .datum(topojson.mesh(ch, ch.objects.cantons, function(a, b) { return a !== b; }))
      .attr("class", "canton-boundaries")
      .attr("d", path);

       svg.append("path")
         .datum(topojson.mesh(ne, ne.objects.municipalities, function(a, b) { return a !== b; }))
         .attr("class", "municipality-boundaries")
         .attr("d", path);

         svg.append("path")
           .datum(topojson.mesh(ne, ne.objects.lakes, function(a, b) { return a !== b; }))
           .attr("class", "lakes-boundaries")
           .attr("d", path);

           svg.append("path")
             .datum(topojson.mesh(be, be.objects.municipalities, function(a, b) { return a !== b; }))
             .attr("class", "municipality-boundaries")
             .attr("d", path);

             svg.append("path")
               .datum(topojson.mesh(be, be.objects.lakes, function(a, b) { return a !== b; }))
               .attr("class", "lakes-boundaries")
               .attr("d", path);

               svg.append("path")
                 .datum(topojson.mesh(ju, ju.objects.municipalities, function(a, b) { return a !== b; }))
                 .attr("class", "municipality-boundaries")
                 .attr("d", path);

                   svg.append("path")
                     .datum(topojson.mesh(vd, vd.objects.municipalities, function(a, b) { return a !== b; }))
                     .attr("class", "municipality-boundaries")
                     .attr("d", path);

                     svg.append("path")
                       .datum(topojson.mesh(vd, vd.objects.lakes, function(a, b) { return a !== b; }))
                       .attr("class", "lakes-boundaries")
                       .attr("d", path);




                       var color = d3.scaleOrdinal()
                         .domain(["Tourisme", "Banque", "Santé" ])
                         .range([ "#33FF3F", "#3374FF", "#FF5733"])

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

  });
