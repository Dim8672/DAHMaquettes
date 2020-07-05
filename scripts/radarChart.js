		var presets = window.chartColors;
		var utils = Samples.utils;
		var inputs = {
			min: 0,
			max: 5,
			count: 9,
			decimals: 0,
			continuity: 1
		};

		function generateData() {
			// radar chart doesn't support stacked values, let's do it manually
			var values = utils.numbers(inputs);
			inputs.from = values;
			return values;
		}

		function generateLabels() {
			return utils.dimension({count: inputs.count});
		}

		utils.srand(42);

		var data = {
			labels: generateLabels(),
			datasets: [{
				backgroundColor: '#11ffee00',
				borderColor: presets.red,
				data: generateData(),
				label: 'Tourisme'
			}, {
				backgroundColor: '#11ffee00',
				borderColor: presets.orange,
				data: generateData(),
				label: 'Banque',
				fill: 1
			}, {
				backgroundColor: '#11ffee00',
				borderColor: presets.green,
				data: generateData(),
				label: 'Santé',
				fill: 1
			}]
		};

		var options = {
			maintainAspectRatio: true,
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
					backdropColor: '#D3D3D3' // should render black behind the text
					}
			}
		};

		var chart = new Chart('chart-0', {
			type: 'radar',
			data: data,
			options: options
		});

		// eslint-disable-next-line no-unused-vars
		function togglePropagate(btn) {
			var value = btn.classList.toggle('btn-on');
			chart.options.plugins.filler.propagate = value;
			chart.update();
		}

		// eslint-disable-next-line no-unused-vars
		function toggleSmooth(btn) {
			var value = btn.classList.toggle('btn-on');
			chart.options.elements.line.tension = value ? 0.4 : 0.000001;
			chart.update();
		}

		// eslint-disable-next-line no-unused-vars
		function randomize() {
			inputs.from = [];
			chart.data.datasets.forEach(function(dataset) {
				dataset.data = generateData();
			});
			chart.update();
		}