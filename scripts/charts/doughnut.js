function randomDataDoughnut(){

	var inputsDoughnut = {
		min: 0,
		max: 5,
		count: JSON.parse(localStorage.getItem('NumberDimension')),
		decimals: 0,
		continuity: 1
	};


	var values = utils.numbers(inputsDoughnut);
	inputs.from = values;
	return values;
}

function generateDataDoughnut(){

var configDoughnut = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: randomDataDoughnut(),
					backgroundColor: [
						window.chartColors.red,
						window.chartColors.orange,
						window.chartColors.yellow,
            window.chartColors.blue,
            window.chartColors.white
					],
					hidden: false,
					label: 'Tourisme'
				},
				{
          data: randomDataDoughnut(),
          backgroundColor: [
            window.chartColors.red,
            window.chartColors.orange,
            window.chartColors.yellow,
            window.chartColors.blue,
            window.chartColors.white
          ],
					hidden: false,
          label: 'Banque'
        },
        {
          data: randomDataDoughnut(),
          backgroundColor: [
            window.chartColors.red,
            window.chartColors.orange,
            window.chartColors.yellow,
            window.chartColors.blue,
            window.chartColors.white
          ],
					hidden: false,
          label: 'Santé'
        }],
				labels: generateLabels()
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Répartition par Dimension'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				tooltips: {
    callbacks: {
      title: function() {
        return "";
      },
      label: function(item, data) {
        var datasetLabel = data.datasets[item.datasetIndex].label || "";
        var dataPoint = item.yLabel;
        return datasetLabel ;
      }
    }
  }
			}
		};

		return configDoughnut;
	};

	function updateDoughnut(newData){
		window.myDoughnut.data.datasets[0].hidden = hideDomain('Tourisme');
		window.myDoughnut.data.datasets[1].hidden = hideDomain('Banque');
		window.myDoughnut.data.datasets[2].hidden = hideDomain('Santé');
		window.myDoughnut.data.datasets[0].data = randomDataDoughnut();
		window.myDoughnut.data.datasets[1].data = randomDataDoughnut();
		window.myDoughnut.data.datasets[2].data = randomDataDoughnut();
		window.myDoughnut.data.labels = JSON.parse(localStorage.getItem('choosenDimensions'));
		window.myDoughnut.update();
	}
