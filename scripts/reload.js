function reloadCharts() {
	var state = getState();
	document.getElementById('General').style.display="none";
	document.getElementById('OnlySector').style.display="none";
	switch(state) {
		case 'General' :
		document.getElementById('General').style.removeProperty('display');
		break;
		
		case 'OnlySector':
		document.getElementById('OnlySector').style.removeProperty('display');
		break;
		
		case 'OnlySize':
		break;
		
		case 'Only1DimensionGeneral':
		break;
		
		case 'Only1DimensionSector':
		break;
		
		case 'Only1DimensionSize':
		break;
		
		default:
		break;
	}
}

function numberOfDimension(){
var numbers = 0;
	if(JSON.parse(localStorage.getItem('Information'))){
		numbers++;
	}  
	if(JSON.parse(localStorage.getItem('Culture'))){
		numbers++;
	}  
	if(JSON.parse(localStorage.getItem('Collaboration'))){
		numbers++;
	}  
	if(JSON.parse(localStorage.getItem('Process'))){
		numbers++;
	}  
	if(JSON.parse(localStorage.getItem('Organisation'))){
		numbers++;
	}  
	if(JSON.parse(localStorage.getItem('CustomerExperience'))){
		numbers++;
	}  
	if(JSON.parse(localStorage.getItem('Transformation'))){
		numbers++;
	}  
	if(JSON.parse(localStorage.getItem('Strategy'))){
		numbers++;
	}
	if(JSON.parse(localStorage.getItem('Product'))){
		numbers++;
	}  	
	return numbers;
}

function getState(){
	var localStorageValues = {
		Information : localStorage.getItem('Information'),
		Culture : localStorage.getItem('Culture'),
		domain : localStorage.getItem('domain'),
		Collaboration : localStorage.getItem('Collaboration'),
		Process : localStorage.getItem('Process'),
		size : localStorage.getItem('size'),
		Organisation : localStorage.getItem('Organisation'),
		CustomerExperience : localStorage.getItem('CustomerExperience'),
		Transformation : localStorage.getItem('Transformation'),
		Strategy : localStorage.getItem('Strategy'),
		Product : localStorage.getItem('Product'),
		NumberOfDimension : numberOfDimension()
	}
	
	console.log(localStorageValues);
	
	if (localStorageValues.domain === 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension === 9) {
		return 'General';
	}
	
	if (localStorageValues.domain != 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension === 9) {
		return 'OnlySector';
	}
	
	if (localStorageValues.domain === 'all' && localStorageValues.size != 'all' && localStorageValues.NumberOfDimension === 9) {
		return 'OnlySize';
	}
	
	if (localStorageValues.domain === 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension === 1) {
		return 'Only1DimensionGeneral';
	}
	
	if (localStorageValues.domain != 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension === 1) {
		return 'Only1DimensionSector';
	}
	
	if (localStorageValues.domain === 'all' && localStorageValues.size != 'all' && localStorageValues.NumberOfDimension === 1) {
		return 'Only1DimensionSize';
	}
}