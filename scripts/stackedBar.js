var barChartData = {
			labels: ['1','2','3','4','5'],
			datasets: [{
				label: 'Tourisme',
				backgroundColor: window.chartColors.red,
				data: [
					6,
					4,
					2,
					3,
					4
				]
			}, {
				label: 'Banque',
				backgroundColor: window.chartColors.blue,
				data: [
					6,
					4,
					2,
					4,
					3
				]
			}, {
				label: 'Santé',
				backgroundColor: window.chartColors.green,
				data: [
					3,
					4,
					5,
					3,
					3
				]
			}]

		};
		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myBar = new Chart(ctx, {
				plugins: [ChartDataLabels],
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Niveau de maturité'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							ticks: {
								beginAtZero : true
							},
							stacked: true,
							display: true
						}],
						yAxes: [{
							ticks: {
								beginAtZero : true
							},
							stacked: true,
							display: true
						}]
					}
				}
			});
		};