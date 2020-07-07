$(document).ready(function(){
	$('#modeType').click(function(){
		if(JSON.parse(localStorage.getItem('Political'))) {
			localStorage.setItem('Political', false);
		} else {
			localStorage.setItem('Political', true);
		}
		reloadCharts();
    });
	
    $('#domain').change(function(){
         localStorage.setItem('domain', $(this).val());
		 reloadCharts();
    });
	
	$('#size').change(function(){
         localStorage.setItem('size', $(this).val());
		 reloadCharts();
    });
	
	$('#size').change(function(){
         localStorage.setItem('size', $(this).val());
		 reloadCharts();
    });
	
	$('#daterangeStartEnd').on('DOMSubtreeModified',function(){
         localStorage.setItem('start', $('#daterangeStartEnd').text().substring(0,10));
		 localStorage.setItem('end', $('#daterangeStartEnd').text().substring(13,24));
		 reloadCharts();
    });
	
	$('#customerClik').click(function() {
		if(JSON.parse(localStorage.getItem('CustomerExperience'))){
			localStorage.setItem('CustomerExperience', false);
			$('#customerClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('CustomerExperience', true);
			$('#customerClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#ProductClik').click(function() {
		if(JSON.parse(localStorage.getItem('Product'))){
			localStorage.setItem('Product', false);
			$('#ProductClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Product', true);
			$('#ProductClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#StrategyClik').click(function() {
		if(JSON.parse(localStorage.getItem('Strategy'))){
			localStorage.setItem('Strategy', false);
			$('#StrategyClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Strategy', true);
			$('#StrategyClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#OrganisationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Organisation'))){
			localStorage.setItem('Organisation', false);
			$('#OrganisationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Organisation', true);
			$('#OrganisationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#ProcessClik').click(function() {
		if(JSON.parse(localStorage.getItem('Process'))){
			localStorage.setItem('Process', false);
			$('#ProcessClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Process', true);
			$('#ProcessClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#CollaborationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Collaboration'))){
			localStorage.setItem('Collaboration', false);
			$('#CollaborationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Collaboration', true);
			$('#CollaborationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#InformationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Information'))){
			localStorage.setItem('Information', false);
			$('#InformationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Information', true);
			$('#InformationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#CultureClik').click(function() {
		if(JSON.parse(localStorage.getItem('Culture'))){
			localStorage.setItem('Culture', false);
			$('#CultureClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Culture', true);
			$('#CultureClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
	
	$('#TransformationClik').click(function() {
		if(JSON.parse(localStorage.getItem('Transformation'))){
			localStorage.setItem('Transformation', false);
			$('#TransformationClik').css('filter', 'opacity(20%)');
		} else {
			localStorage.setItem('Transformation', true);
			$('#TransformationClik').css('filter', 'opacity(100%)');
		}
		reloadCharts();
	});
});