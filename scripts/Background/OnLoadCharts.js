window.onload = function(){
			// Chargement du chart "Polar"
			var ctx2 = document.getElementById('chart-area');
			window.myPolarArea = new Chart(ctx2, config);
			// Chargement du chart "Bar Stacked"
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
}