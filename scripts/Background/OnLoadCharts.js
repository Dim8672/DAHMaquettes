window.onload = function(){

			// Chargement du chart "radar"
			var ctxRadar = document.getElementById('chart-0');
			window.myRadarChart = new Chart (ctxRadar, {
			 	type: 'radar',
			 	data: generateDataRadar(),
			 	options: options
			 });

			var ctxPolar = document.getElementById('chart-area');
			window.myPolarArea = new Chart(ctxPolar, configPolar);
			// Chargement du chart "Bar Stacked"
			var ctxStackedBar = document.getElementById('canvas').getContext('2d');
			window.myBar = new Chart(ctxStackedBar, {
				plugins: [ChartDataLabels],
				type: 'bar',
				data: generateDataStackedBarChart(),
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

			var ctxBarChart = document.getElementById('stackedBarOneDimension').getContext('2d');
			window.barChartOnlyOneDimension = new Chart(ctxBarChart, {
				plugins: [ChartDataLabels],
				type: 'bar',
				data: generateDataBarChartOnlyOneDimension(),
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
							stacked: false,
							display: true
						}],
						yAxes: [{
							ticks: {
								beginAtZero : true
							},
							stacked: false,
							display: true
						}]
					}
				}
			});

			var ctxDoughnut = document.getElementById('chart-area-doughnut').getContext('2d');
			window.myDoughnut = new Chart(ctxDoughnut, generateDataDoughnut());
}
