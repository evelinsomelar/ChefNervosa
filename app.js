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

    $('.custom-control-input').change(function () {
        if (this.checked) {
            console.log('check!');
            $(this).parent().parent().parent().addClass('hazmuch');
        } else {
            console.log('uncheck...');
            $(this).parent().parent().parent().removeClass('hazmuch');
        }

        var elem = $('tbody').find('tr').sort(sort_foodstuff);

        //console.log(elem);
        $('tbody').append(elem);

    });

    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        /* Applying the top margin on modal dialog to align it vertically center */
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    }); 

    // console.log( "ready!" );
});

function sort_foodstuff(a, b) {
    //console.log(a.className);
    //console.log(b.className);
    return a.className < b.className ? -1 : 1;
    }

    // https://www.tutorialrepublic.com/faq/how-to-align-bootstrap-modal-vertically-center.php