var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};

		var configDoughnut = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						3,
						4,
						10,
            8,
            3
					],
					backgroundColor: [
						window.chartColors.red,
						window.chartColors.orange,
						window.chartColors.yellow,
            window.chartColors.blue,
            window.chartColors.white
					],
					label: 'Dimension 1'
				},
        {
          data: [
            3,
            4,
            10,
            8,
            3
          ],
          backgroundColor: [
            window.chartColors.red,
            window.chartColors.orange,
            window.chartColors.yellow,
            window.chartColors.blue,
            window.chartColors.white
          ],
          label: 'Dimension 2'
        },
        {
          data: [
            3,
            4,
            10,
            8,
            3
          ],
          backgroundColor: [
            window.chartColors.red,
            window.chartColors.orange,
            window.chartColors.yellow,
            window.chartColors.blue,
            window.chartColors.white
          ],
          label: 'Dimension 3'
        }],
				labels: [1,2,3,4,5]
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
				}
			}
		};

    
