function reloadCharts() {
	var state = getState();
	numberOfDimension();
	document.getElementById('General').style.display="none";
	document.getElementById('OnlySector').style.display="none";
	document.getElementById('Political').style.display="none";
	document.getElementById('DimensionFocus').style.display="none";
	switch(state) {
		case 'General' :
		document.getElementById('General').style.removeProperty('display');
		updateRadar();
		break;

		case 'OnlySector':
		document.getElementById('OnlySector').style.removeProperty('display');
		break;

		case 'OnlySize':
		break;

		case 'OnlyDimensionGeneral':
		document.getElementById('DimensionFocus').style.removeProperty('display');
		break;

		case 'OnlyDimensionSector':
		break;

		case 'OnlyDimensionSize':
		break;

		case 'Political':
		document.getElementById('Political').style.removeProperty('display');
		break;

		default:
		break;
	}
}

function numberOfDimension(){
var numbers = 0;
var choosenDimension = new Array();
	if(JSON.parse(localStorage.getItem('Information'))){
		numbers++;
		choosenDimension.push('Information Technology');
	}
	if(JSON.parse(localStorage.getItem('Culture'))){
		numbers++;
		choosenDimension.push('Culture & Expertise');
	}
	if(JSON.parse(localStorage.getItem('Collaboration'))){
		numbers++;
		choosenDimension.push('Collaboration');
	}
	if(JSON.parse(localStorage.getItem('Process'))){
		numbers++;
		choosenDimension.push('Process Digitalisation');
	}
	if(JSON.parse(localStorage.getItem('Organisation'))){
		numbers++;
		choosenDimension.push('Organisation');
	}
	if(JSON.parse(localStorage.getItem('CustomerExperience'))){
		numbers++;
		choosenDimension.push('Customer Experience');
	}
	if(JSON.parse(localStorage.getItem('Transformation'))){
		numbers++;
		choosenDimension.push('Transformation Management');
	}
	if(JSON.parse(localStorage.getItem('Strategy'))){
		numbers++;
		choosenDimension.push('Strategy');
	}
	if(JSON.parse(localStorage.getItem('Product'))){
		numbers++;
		choosenDimension.push('Production Innovation');
	}
	localStorage.setItem('choosenDimensions',JSON.stringify(choosenDimension));
	localStorage.setItem('NumberDimension', numbers);
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
		Political : JSON.parse(localStorage.getItem('Political')),
		NumberOfDimension : numberOfDimension()
	}

	console.log(localStorageValues);

	if(localStorageValues.Political === true) {
		console.log("Etat : Politique");
		return 'Political';
	}

	if (localStorageValues.domain === 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension > 3) {
		return 'General';
	}

	if (localStorageValues.domain != 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension === 9) {
		return 'OnlySector';
	}

	if (localStorageValues.domain === 'all' && localStorageValues.size != 'all' && localStorageValues.NumberOfDimension === 9) {
		return 'OnlySize';
	}

	if (localStorageValues.domain === 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension <= 3) {
		return 'OnlyDimensionGeneral';
	}

	if (localStorageValues.domain != 'all' && localStorageValues.size === 'all' && localStorageValues.NumberOfDimension <= 3) {
		return 'OnlyDimensionSector';
	}

	if (localStorageValues.domain === 'all' && localStorageValues.size != 'all' && localStorageValues.NumberOfDimension <= 3) {
		return 'OnlyDimensionSize';
	}
}
