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

Chart.plugins.unregister(ChartDataLabels);
var data = d3.json('DonneesTraitees.json');
moment.locale('fr');
var french_daterangepicker ={
	'direction': 'ltr',
    'format': 'DD.MM.YYYY',
    'separator': ' - ',
    'applyLabel': 'Appliquer',
    'cancelLabel': 'Annuler',
    'fromLabel': 'De',
    'toLabel': 'A',
    'customRangeLabel': 'Personnaliser',
    'daysOfWeek': [
        'Di',
        'Lu',
        'Ma',
        'Me',
        'Je',
        'Ve',
        'Sa'
    ],
    'monthNames': [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ],
    'firstDay': 1
};
$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('DD.MM.YYYY') + ' - ' + end.format('DD.MM.YYYY'));
    }

    $('#reportrange').daterangepicker({
		locale: french_daterangepicker,
        startDate: start,
        endDate: end,
        ranges: {
           'Aujourd\'hui': [moment(), moment()],
           'Hier': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           '7 dernier jours': [moment().subtract(6, 'days'), moment()],
           '30 derniers jours': [moment().subtract(29, 'days'), moment()],
           'Ce mois': [moment().startOf('month'), moment().endOf('month')],
           'Cette année': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});
// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
