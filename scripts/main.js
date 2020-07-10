// Initialisation du localStorage
localStorage.setItem('domain', 'all');
localStorage.setItem('size', 'all');
localStorage.setItem('start', $('#daterangeStartEnd').text().substring(0,10));
localStorage.setItem('end', $('#daterangeStartEnd').text().substring(13,24));
localStorage.setItem('CustomerExperience', true);
localStorage.setItem('Product', true);
localStorage.setItem('Strategy', true);
localStorage.setItem('Organisation', true);
localStorage.setItem('Process', true);
localStorage.setItem('Collaboration', true);
localStorage.setItem('Information', true);
localStorage.setItem('Culture', true);
localStorage.setItem('Transformation', true);
localStorage.setItem('Political',false);
localStorage.setItem('NumberDimension', 9);
localStorage.setItem('choosenDimensions',JSON.stringify(new Array('Information Technology','Culture & Expertise','Collaboration','Process Digitalisation','Organisation','Customer Experience','Transformation Management','Strategy','Production Innovation')));

Chart.plugins.unregister(ChartDataLabels);
// var data = d3.json('DonneesTraitees.json');
moment.locale('fr');
