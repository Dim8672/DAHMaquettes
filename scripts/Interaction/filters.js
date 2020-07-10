$(document).ready(function(){
	$('#modeType').click(function(){
		if(JSON.parse(localStorage.getItem('Political'))) {
			localStorage.setItem('Political', false);
		} else {
			localStorage.setItem('Political', true);
		}
		reloadCharts(true);
    });

    $('#domain').change(function(){
         localStorage.setItem('domain', $(this).val());
		 reloadCharts(false);
    });

	$('#size').change(function(){
         localStorage.setItem('size', $(this).val());
		 reloadCharts(true);
    });

	$('#daterangeStartEnd').on('DOMSubtreeModified',function(){
         localStorage.setItem('start', $('#daterangeStartEnd').text().substring(0,10));
		 localStorage.setItem('end', $('#daterangeStartEnd').text().substring(13,24));
		 reloadCharts(true);
    });

	$('#customerClik').click(function() {
		if(JSON.parse(localStorage.getItem('CustomerExperience'))){
			localStorage.setItem('CustomerExperience', false);
			$('#customerClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('CustomerExperience', true);
			$('#customerClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#ProductClik').click(function() {
		if(JSON.parse(localStorage.getItem('Product'))){
			localStorage.setItem('Product', false);
			$('#ProductClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Product', true);
			$('#ProductClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#StrategyClik').click(function() {
		if(JSON.parse(localStorage.getItem('Strategy'))){
			localStorage.setItem('Strategy', false);
			$('#StrategyClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Strategy', true);
			$('#StrategyClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#OrganisationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Organisation'))){
			localStorage.setItem('Organisation', false);
			$('#OrganisationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Organisation', true);
			$('#OrganisationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#ProcessClik').click(function() {
		if(JSON.parse(localStorage.getItem('Process'))){
			localStorage.setItem('Process', false);
			$('#ProcessClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Process', true);
			$('#ProcessClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#CollaborationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Collaboration'))){
			localStorage.setItem('Collaboration', false);
			$('#CollaborationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Collaboration', true);
			$('#CollaborationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#InformationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Information'))){
			localStorage.setItem('Information', false);
			$('#InformationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Information', true);
			$('#InformationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#CultureClik').click(function() {
		if(JSON.parse(localStorage.getItem('Culture'))){
			localStorage.setItem('Culture', false);
			$('#CultureClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Culture', true);
			$('#CultureClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});

	$('#TransformationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Transformation'))){
			localStorage.setItem('Transformation', false);
			$('#TransformationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Transformation', true);
			$('#TransformationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts(false);
	});
});
