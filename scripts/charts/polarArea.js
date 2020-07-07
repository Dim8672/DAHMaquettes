var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};

		var chartColors = window.chartColors;
		console.log(chartColors);
		var color = Chart.helpers.color;
		var configPolar = {
			type: 'polarArea',
			data: {
				datasets: [{
					data: [
						5,
						3,
						2,
						1,
						4,
						3,
						2,
						3,
						5
					],
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
				labels: [
					'Customer Exeprience',
					'Strategy',
					'Innovation Product',
					'Organisation',
					'Collaboration',
					'Process',
					'Information Technology',
					'Culture',
					'Transformation'
				]
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
