// Génération du Barchart
function generateDataBarChartOnlyOneDimension(){
	var barChartData = {
			labels: [1, 2, 3, 4, 5],
			datasets: [{
				label: 'Tourisme',
				backgroundColor:  window.chartColors.red,
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: [
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom()
				]
			}, {
				label: 'Banque',
				backgroundColor:  window.chartColors.blue,
				borderColor: window.chartColors.blue,
				borderWidth: 1,
				data: [
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom()
				]
			},
			{
				label: 'Santé',
				backgroundColor:  window.chartColors.green,
				borderColor: window.chartColors.green,
				borderWidth: 1,
				data: [
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom(),
					generateDataBarChartRandom()
				]
			}]

		};

		return barChartData;
};

function generateDataBarChartRandom(){
	return Math.floor(Math.random() * 5) + 1;
}


function updateBarChart(newData){
	if (newData){
		window.barChartOnlyOneDimension.data = generateDataBarChartOnlyOneDimension();
	} else {
		window.barChartOnlyOneDimension.data.datasets[0].hidden = hideDomain('Tourisme');
		window.barChartOnlyOneDimension.data.datasets[1].hidden = hideDomain('Banque');
		window.barChartOnlyOneDimension.data.datasets[2].hidden = hideDomain('Santé');
	}
	window.barChartOnlyOneDimension.update();

};

$('#customerClik,#ProductClik,#StrategyClik,#OrganisationClik,#ProcessClik,#CollaborationClik,#InformationClik,#CultureClik,#TransformationClik').on('click', function() {
			updateBarChart(true);
		});
