$(document).ready(function () {
    let button = document.querySelector(".submit-btn");
    button.disabled = true; //setting button state to disabled

    
    //YES/NO click events
    $("#questn2").hide();
    $("#questn5").hide();
    $("#questn1A").click(function () {
        if ($('#questn1A').is(":checked")) {
            $("#questn2").hide();
            $("#questn5").hide();
            $("#questn3").show();
        }
    });

    $("#questn1B").click(function () {
        if ($('#questn1B').is(":checked")) {
            $("#questn2").show();
        }
    });

    //Questn 2
    $("#questn3").hide();
    $("#questn2A").click(function () {
        if ($('#questn2A').is(":checked")) {
            $("#questn3").show();
            $("#questn4").hide();
            $("#questn5").show();
            $("#questn6").show();
        }
    });

    $("#questn2B").click(function () {
        if ($('#questn2B').is(":checked")) {
            $("#questn3").show();
            $("#questn4").show();
            $("#questn5").hide();
            $("#questn6").show();
        }
    });


    //Questn 3 other handler
    $("#questn3Txt").hide();
    $("#questn3Other").click(function () {
        if ($('#questn3Other').is(":checked")) {
            $("#questn3Txt").show();
        } else {
            $("#questn3Txt").hide();
        }
    });

    //Questn 4 other handler
    $("#questn4Txt").hide();
    $("#questn4Other").click(function () {
        if ($('#questn4Other').is(":checked")) {
            $("#questn4Txt").show();
        } else {
            $("#questn4Txt").hide();
        }
    });

    //Questn 5 other handler
    $("#questn5Txt").hide();
    $("#questn5Other").click(function () {
        if ($('#questn5Other').is(":checked")) {
            $("#questn5Txt").show();
        } else {
            $("#questn5Txt").hide();
        }
    });

    //Questn 6 Other
    $("#questn6Txt").hide();
    $("#questn6Other").click(function () {
        if ($('#questn6Other').is(":checked")) {
            $("#questn6Txt").show();
        } else {
            $("#questn6Txt").hide();
        }
    });

    //Questn 4E
    $("#questn4ETxt1").hide();
    $("#questn4ETxt2").hide();
    $("#questn4E").click(function () {
        if ($('#questn4E').is(":checked") && $('#questn4B').is(":checked")) {
            $("#questn4ETxt1").show();
            $("#questn4ETxt2").show();
        } else {
            $("#questn4ETxt1").hide();
            $("#questn4ETxt2").hide();
        }
    });

    //Questn 4B
    $("#questn4B").click(function () {
        if ($('#questn4B').is(":checked") && $('#questn4E').is(":checked")) {
            $("#questn4ETxt1").show();
            $("#questn4ETxt2").show();
        } else {
            $("#questn4ETxt1").hide();
            $("#questn4ETxt2").hide();
        }
    });


    //SUBMIT FORM
    $("#other").click(function () {
        if (($('#other').is(':checked'))) {
            button.disabled = false; 
        }else{
            button.disabled = true; 
        }
    });


    
});

