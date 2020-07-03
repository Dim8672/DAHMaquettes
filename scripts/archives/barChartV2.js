var MONTHS = [1,2,3,4,5];
		var color = Chart.helpers.color;
		var barChartData = {
			labels: [1,2,3,4,5],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: [
					10,
					3,
					11,
					34,
					21
				]
			}
			]

		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Niveau de maturité'
					}
				}
			});

		};
