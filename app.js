$( document ).ready(function() {

    $('#retsepti-sammud').on('show.bs.modal', function (event) {

        var modal = $(this);
        var steps = $('#steps').html();

        // console.log(steps);

        modal.find('#stepper').html(steps);
        modal.find('.step').addClass('carousel-item');
        modal.find('.step').first().addClass('active');

    });

    // console.log( "ready!" );
});