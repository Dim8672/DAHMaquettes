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


function updateStackedBarChart(){
	window.mybar.update();
};