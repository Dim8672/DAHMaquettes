		var presets = window.chartColors;
		var utils = Samples.utils;
		var inputs = {
			min: 0,
			max: 5,
			count: JSON.parse(localStorage.getItem('NumberDimension')),
			decimals: 0,
			continuity: 1
		};

		function hideDomain(domain){
			if (localStorage.getItem('domain') == 'all') {
				return false;
			} else {
					if (localStorage.getItem('domain') != domain){
						return true;
					} else {
						return false;
					}

			}
		}

		function generateData() {
			// radar chart doesn't support stacked values, let's do it manually
			var values = utils.numbers(inputs);
			inputs.from = values;
			return values;
		}

		function generateLabels() {
			return utils.dimension({count: inputs.count});
		}

		function generateDataRadar(){
			var data = {
				labels: generateLabels(),
				datasets: [{
					backgroundColor: '#11ffee00',
					borderColor: presets.red,
					data: generateData(),
					label: 'Tourisme',
					hidden : hideDomain('Tourisme')
				}, {
					backgroundColor: '#11ffee00',
					borderColor: presets.orange,
					data: generateData(),
					label: 'Banque',
					fill: 1,
					hidden : hideDomain('Banque')
				}, {
					backgroundColor: '#11ffee00',
					borderColor: presets.green,
					data: generateData(),
					label: 'Santé',
					fill: 1,
					hidden : hideDomain('Santé')
				}]
			};
			return data;
		}

		var options = {
			maintainAspectRatio: true,
			legend: {
                        onClick: (e) => e.stopPropagation()
                    },
			spanGaps: false,
			elements: {
				line: {
					tension: 0.000001
				}
			},
			plugins: {
				filler: {
					propagate: false
				},
				'samples-filler-analyser': {
					target: 'chart-analyser'
				}
			},
			scale: {
				ticks: {
					backdropColor: '#D3D3D3'
					}
			}
		};

		function updateRadar(newData){
			if(newData){
				window.myRadarChart.data = generateDataRadar();
			} else {
				window.myRadarChart.data.datasets[0].hidden = hideDomain('Tourisme');
				window.myRadarChart.data.datasets[1].hidden = hideDomain('Banque');
				window.myRadarChart.data.datasets[2].hidden = hideDomain('Santé');
				window.myRadarChart.data.labels = JSON.parse(localStorage.getItem('choosenDimensions'));
			}
			window.myRadarChart.update();

		}

		function resetRadar(){
			window.myRadarChart.reset();
		}
