function generateDataStackedBarChart(){
	var barChartData = {
				labels: ['1','2','3','4','5'],
				datasets: [{
					label: 'Tourisme',
					hidden : hideDomain('Tourisme'),
					backgroundColor: window.chartColors.red,
					data: [
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom()
					]
				}, {
					label: 'Banque',
					hidden : hideDomain('Banque'),
					backgroundColor: window.chartColors.blue,
					data: [
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom()
					]
				}, {
					label: 'Santé',
					hidden : hideDomain('Santé'),
					backgroundColor: window.chartColors.green,
					data: [
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom(),
						generateDataStackedRandom()
					]
				}]

			};

			return barChartData;
}

function generateDataStackedRandom(){
	return Math.floor(Math.random() * 5) + 1;
}


function updateStackedBarChart(newData){
	if (newData){
		window.myBar.data = generateDataStackedBarChart();
	} else {
		window.myBar.data.datasets[0].hidden = hideDomain('Tourisme');
		window.myBar.data.datasets[1].hidden = hideDomain('Banque');
		window.myBar.data.datasets[2].hidden = hideDomain('Santé');
	}
	window.myBar.update();

};

$('#customerClik,#ProductClik,#StrategyClik,#OrganisationClik,#ProcessClik,#CollaborationClik,#InformationClik,#CultureClik,#TransformationClik').on('click', function() {
			updateStackedBarChart(true);
		});
