$(document).ready(function () {

    $('#retsepti-sammud').on('show.bs.modal', function (event) {

        var modal = $(this);
        var steps = $('#steps').html();

        // console.log(steps);

        modal.find('#stepper').html(steps);
        modal.find('.step').addClass('carousel-item');
        modal.find('.step').first().addClass('active');

    });

    $('.custom-control-input:checkbox:checked').each(function () {
        $(this).parent().parent().parent().addClass('hazmuch');
    });

    $('#ostunimekiri .custom-control-input').change(function () {
        if (this.checked) {
            console.log('check!');
            $(this).parent().parent().parent().addClass('hazmuch');
        } else {
            console.log('uncheck...');
            $(this).parent().parent().parent().removeClass('hazmuch');
        }

        var elem = $('#ostunimekiri tbody').find('tr').sort(sort_foodstuff);

        //console.log(elem);
        $('#ostunimekiri tbody').append(elem);

    });

    // console.log( "ready!" );
});

function sort_foodstuff(a, b) {
    //console.log(a.className);
    //console.log(b.className);
    return a.className < b.className ? -1 : 1;
    }