// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 90, left: 40},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select('#barChart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform',
          'translate(' + margin.left + ',' + margin.top + ')');

// Parse the Data
data = [
      {axis:'1',value:10},
      {axis:'2',value:5},
      {axis:'3',value:6},
      {axis:'4',value:8},
      {axis:'5',value:9},
];
// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.axis; }))
  .padding(0.2);
svg.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .call(d3.axisBottom(x))
  .selectAll('text')
    .attr('transform', 'translate(-10,0)rotate(-45)')
    .style('text-anchor', 'end');
// X axis label
svg.append('text')
     .attr('transform',
           'translate(' + (width/2) + ' ,' +
                          (height + margin.top + 20) + ')')
     .style('text-anchor', 'middle')
     .text('Niveau de Maturité');

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 15])
  .range([ height, 0]);
svg.append('g')
  .call(d3.axisLeft(y));

// Bars
svg.selectAll('mybar')
  .data(data)
  .enter()
  .append('rect')
    .attr('x', function(d) { return x(d.axis); })
    .attr('width', x.bandwidth())
    .attr('fill', '#69b3a2')
    // no bar at the beginning thus:
    .attr('height', function(d) { return height - y(0); }) // always equal to 0
    .attr('y', function(d) { return y(0); })


// Animation
svg.selectAll('rect')
  .transition()
  .duration(800)
  .attr('y', function(d) { return y(d.value); })
  .attr('height', function(d) { return height - y(d.value); })
  .delay(function(d,i){console.log(i) ; return(i*100)})

  // Add title
  svg.append('text')
          .attr('x', (width / 2))
          .attr('y', margin.top)
          .attr('text-anchor', 'middle')
          .style('font-size', '16px')
          .text('Maturité digitale des entreprises');

console.log('test');
// Adding value to data points
svg.selectAll('mybar')
  .data(data)
  .enter()
  .append('text')
  .text(function(d) { return d.value; })
  .attr('x', function(d) { return x(d.axis) + 28; })
  .attr('y', function(d){
    return y(d.value) - 10 ;
    })
    .attr('font-family' , 'sans-serif')
    .attr('font-size' , '11px')
    .attr('fill' , 'black')
    .attr('text-anchor', 'middle');
