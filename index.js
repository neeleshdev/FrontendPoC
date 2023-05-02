$(document).ready(function () {
    let button = document.querySelector(".submit-btn");
    // button.disabled = true; //setting button state to disabled
    $("#questn3").hide();
    $("#questn4").hide();
    $("#questn6").hide();

    //YES/NO click events
    $("#questn2").hide();
    $("#questn5").hide();
    $("#questn1A").click(function () {
        if ($('#questn1A').is(":checked")) {
            $("#questn2").hide();
            $("#questn5").hide();
            $("#questn3").show();
            $("#questn4").show();
            $("#questn6").show();
        }
    });

    $("#questn1B").click(function () {
        if ($('#questn1B').is(":checked")) {
            $("#questn2").show();
            $("#questn2").show();
            $("#questn3").show();
            $("#questn4").show();
            $("#questn6").show();
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

    //Questn 3B & 4E
    $("#questn4ETxt1").hide();
    $("#questn4ETxt2").hide();
    $("#questn12").hide();
    $("#questn3B").click(function () {
        if ($('#questn4E').is(":checked") && $('#questn3B').is(":checked")) {
            $("#questn4ETxt1").show();
            $("#questn4ETxt2").show();
            $("#questn12").show();
        } else {
            $("#questn4ETxt1").hide();
            $("#questn4ETxt2").hide();
            $("#questn12").hide();
        }
    });
    $("#questn4E").click(function () {
        if ($('#questn4E').is(":checked") && $('#questn3B').is(":checked")) {
            $("#questn4ETxt1").show();
            $("#questn4ETxt2").show();
            $("#questn12").show();
        } else {
            $("#questn4ETxt1").hide();
            $("#questn4ETxt2").hide();
            $("#questn12").hide();
        }
    });

    //Questn 3B & 4B
    $("#questn7").hide();
    $("#questn3B").click(function () {
        if ($('#questn3B').is(":checked") && $('#questn4B').is(":checked")) {
            $("#questn7").show();
        } else {
            $("#questn7").hide();
        }
    });
    $("#questn4B").click(function () {
        if ($('#questn3B').is(":checked") && $('#questn4B').is(":checked")) {
            $("#questn7").show();
        } else {
            $("#questn7").hide();
        }
    });

    //Question 7-A
    $("#questn8").hide();
    $("#7ATxt").hide();
    $("#questn7A").click(function () {
        if ($('#questn7A').is(":checked")) {
            $("#questn8").show();
            $("#7ATxt").hide();
        }
    });
    $("#questn7A").click(function () {
        if ($('#questn7A').is(":checked") && $('#questn8A').is(":checked")) {
            $("#questn8").show();
            $("#7ATxt").hide();
        }
    });
    $("#questn7B").click(function () {
        if ($('#questn7B').is(":checked")) {
            $("#questn8").hide();
            $("#7ATxt").show();
        }
    });

    //Question 8-A
    $("#Q8ATxt").hide();
    $("#questn9").hide();
    $("#Q9BTxt").hide();
    $("#Q9BTxt-2").hide();
    $("#questn8A").click(function () {
        if ($('#questn8A').is(":checked") && $('#questn7A').is(":checked")) {
            $("#Q8ATxt").show();
            $("#Q9BTxt").hide();
            $("#Q9BTxt-2").hide();
            $("#Q8CTxt").hide();
            $("#questn9").hide();
        }
    });

    //Question 8-B
    $("#questn8").hide();
    $("#questn8B").click(function () {
        if ($('#questn8B').is(":checked")) {
            $("#questn9").show();
            $("#Q9BTxt").hide();
            $("#Q8ATxt").hide();
            $("#Q9BTxt-2").show();
            $("#Q8CTxt").hide();
        }
    });

    //Question 8-C
    $("#Q8CTxt").hide();
    $("#questn8C").click(function () {
        if ($('#questn8C').is(":checked")) {
            $("#Q8CTxt").show();
            $("#questn9").hide();
        }
    });


    //Question 9-A
    $("#questn10").hide();
    $("#Q9ATxt").hide();
    $("#questn9A").click(function () {
        if ($('#questn9A').is(":checked")) {
            $("#questn10").show();
            $("#Q9ATxt").show();
        }
    });

    //Question 9-B
    $("#Q9BTxt").hide();
    $("#questn9B").click(function () {
        if ($('#questn9B').is(":checked")) {
            $("#Q9BTxt").show();
            $("#questn10").hide();
            $("#Q9ATxt").hide();

        }
    });

    //Question 10-A
    $("#questn11").hide();
    $("#questn10A").click(function () {
        if ($('#questn10A').is(":checked")) {
            $("#questn11").show();
            $("#Q10BTxt").hide();
            $("#Q10BTxt-2").hide();
        }
    });

    //Question 10-B
    $("#Q10BTxt").hide();
    $("#Q10BTxt-2").hide();
    $("#questn10B").click(function () {
        if ($('#questn10B').is(":checked")) {
            $("#Q10BTxt").show();
            $("#Q10BTxt-2").show();
            $("#questn11").hide();
        }
    });

    //Question 11-A
    $("#Q11ATxt").hide();
    $("#questn11A").click(function () {
        if ($('#questn11A').is(":checked")) {
            $("#Q11ATxt").show();
        }
    });

    //Question 11-B
    $("#questn11B").click(function () {
        if ($('#questn11B').is(":checked")) {
            $("#Q11ATxt").hide();
        }
    });

    //Question 12A
    $("#questn13").hide();
    $("#questn12A").click(function () {
        if ($('#questn12A').is(":checked")) {
            $("#questn13").show();
        } else {
            $("#questn13").hide();
        }
    });

    //Question 12B
    $("#12ATxt").hide();
    $("#questn12B").click(function () {
        if ($('#questn12B').is(":checked")) {
            $("#12ATxt").show();
        } else {
            $("#12ATxt").hide();
        }
    });

    //SUBMIT FORM
    // $("#other").click(function () {
    //     if (($('#other').is(':checked'))) {
    //         button.disabled = false; 
    //     }else{
    //         button.disabled = true; 
    //     }
    // });


    $("#my_form").submit(function (event) {
        event.preventDefault(); //prevent default action 


        let Q1Res = getQ1output();
        let Q2Res = getQ2output();
        let Q3Res = getQ3output();
        let Q4Res = getQ4output();
        let Q5Res = getQ5output();
        let Q6Res = getQ6output();
        let Q7Res = getQ7output();


        //Q1 Output
        if (Q1Res.length > 0 && Q1Res[0] === 'Yes' && Q3Res.length > 0 && Q4Res.length > 0 && Q6Res.length > 0) {
            //check: 1 3, 4, 6
                console.log("Q1 :", Q1Res);
                console.log("Q3 :", Q3Res);
                console.log("Q4 :", Q4Res);
                console.log("Q6 :", Q6Res);
                alert('Form Submitted Successfully !!!');

        } else if (Q1Res.length > 0 && Q1Res[0] === "No") {
            if (Q2Res.length > 0 && Q2Res[0] === 'Yes' && Q3Res.length > 0 && Q5Res.length > 0 && Q6Res.length > 0) {
                console.log("Q1 :", Q1Res);
                console.log("Q2 :", Q2Res);
                console.log("Q3 :", Q3Res);
                console.log("Q5 :", Q5Res);
                console.log("Q6 :", Q6Res);
                alert('Form Submitted Successfully !!!');
            } else if (Q2Res.length > 0 && Q2Res[0] === 'No'  && Q3Res.length > 0 && Q4Res.length > 0 && Q6Res.length > 0) {
                console.log("Q1 :", Q1Res);
                console.log("Q2 :", Q2Res);
                console.log("Q3 :", Q3Res);
                console.log("Q4 :", Q4Res);
                console.log("Q6 :", Q6Res);
                alert('Form Submitted Successfully !!!');
            } else {
                alert('Please fill the required fields marked as ( * )')
            }
        }else{
            alert('Please fill the required fields marked as ( * )')
        }

        //Q2 Output
        if (Q2Res.length > 0 && Q2Res[0] === 'Yes') {

        } else if (Q2Res.length > 0 && Q2Res[0] === "No") {

        }

        //Q3 Output
        if (Q3Res.length > 0) {

        }

        //Q4 Output 
        if (Q4Res.length > 0) {

        }


        //Q5 Output 
        if (Q5Res.length > 0) {

        }

        //Q6 Output 
        if (Q6Res.length > 0) {

        }

        //Q7 Output
        if (Q7Res.length > 0 && Q7Res[0] === 'Yes') {

        } else if (Q7Res.length > 0 && Q7Res[0] === "No") {

        }
    });


    function getQ1output() {
        var data = [];
        $.each($("input[name='Q1']:checked"), function () {
            data.push($(this).val());
        });
        return data
    }

    function getQ2output() {
        var data = [];
        $.each($("input[name='Q2']:checked"), function () {
            data.push($(this).val());
        });

        return data
    }

    function getQ3output() {
        var question3 = [];
        $.each($("input[name='Q3']:checked"), function () {
            question3.push($(this).val());
        });
        return question3;
    }

    function getQ4output() {
        var question4 = [];
        $.each($("input[name='Q4']:checked"), function () {
            question4.push($(this).val());
        });
        return question4;
    }

    function getQ5output() {
        var question5 = [];
        $.each($("input[name='Q5']:checked"), function () {
            question5.push($(this).val());
        });
        return question5;
    }

    function getQ6output() {
        var question6 = [];
        $.each($("input[name='Q6']:checked"), function () {
            question6.push($(this).val());
        });
        return question6;
    }

    function getQ7output() {
        var data = [];
        $.each($("input[name='Q7']:checked"), function () {
            data.push($(this).val());
        });
        return data
    }


});

