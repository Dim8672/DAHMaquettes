var utils = Samples.utils;
var inputs = {
	min: 0,
	max: 5,
	count: JSON.parse(localStorage.getItem('NumberDimension')),
	decimals: 0,
	continuity: 1
};

var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};

function generateDataPolar(){
	inputs.count = JSON.parse(localStorage.getItem('NumberDimension'));
	var values = utils.numbers(inputs);
	inputs.from = values;
	return values;
}

function generateLabelsPolar() {
	console.log("Test : " + utils.dimension({count: inputs.count}))
	return utils.dimension({count: inputs.count});
}

		var chartColors = window.chartColors;
		var color = Chart.helpers.color;
		var configPolar = {
			type: 'polarArea',
			data: {
				datasets: [{
					data: generateDataPolar(),
					backgroundColor: [
						color(chartColors.red).alpha(0.5).rgbString(),
						color(chartColors.orange).alpha(0.5).rgbString(),
						color(chartColors.yellow).alpha(0.5).rgbString(),
						color(chartColors.green).alpha(0.5).rgbString(),
						color(chartColors.blue).alpha(0.5).rgbString(),
						color(chartColors.black).alpha(1).rgbString(),
						color(chartColors.grey).alpha(0.5).rgbString(),
						color(chartColors.red).alpha(3).rgbString(),
						color(chartColors.red).alpha(0.1).rgbString()
					],
					label: 'My dataset' // for legend
				}],
				labels: generateLabelsPolar()
			},
			options: {
				responsive: true,
				legend: {
					position: 'right',
				},
				title: {
					display: true,
					text: 'Niveau de maturité par dimension'
				},
				scale: {
					ticks: {
						beginAtZero: true,
						backdropColor: '#D3D3D3' // should render black behind the text
					},
					reverse: false
				},
				animation: {
					animateRotate: false,
					animateScale: true
				}
			}
		};

		function updatePolar(newData){
			if(newData){
				window.myPolarArea.data.datasets[0].data = generateDataPolar();
			} else {
				JSON.parse(localStorage.getItem('choosenDimensions'));
				window.myPolarArea.data.datasets[0].data = generateDataPolar();
		}
			window.myPolarArea.update();
		}

		function resetPolar(){
			window.myPolarArea.reset();
		}
