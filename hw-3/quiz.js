$("p").hide();
$("#start").hide();
$("#next1").hide();
$("#next2").hide();
$("#answer1").hide();
$("#answer2").hide();
$("#answer3").hide();
$("#answer4").hide();
$("#answer").hide();
$("#confirm").hide();

$("#next").click(function(){
    $("b").hide();
    $("#fname").hide();
    $("#next").hide();
    $("p").show();
    $("#start").show();
    $("#start").click(function(){
        fetch("quiz.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("demo").innerHTML = data.prvo;
            document.getElementById("answer1").innerHTML = "1818.";
            document.getElementById("answer2").innerHTML = "1852.";
            document.getElementById("answer3").innerHTML = "1952.";
            document.getElementById("answer4").innerHTML = "1847.";
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            $("#start").hide();
            $("#instructions").hide();
            $(".btn").click(function(){
                document.getElementById("demo").innerHTML = data.drugo;
                $("#answer").show();
                $("#confirm").show();
                $("#answer1").hide();
                $("#answer2").hide();
                $("#answer3").hide();
                $("#answer4").hide();
                $(".btn").click(function(){
                    document.getElementById("demo").innerHTML = data.trece;
                    document.getElementById("answer1").innerHTML = "1976.";
                    document.getElementById("answer2").innerHTML = "1972.";
                    document.getElementById("answer3").innerHTML = "1968.";
                    document.getElementById("answer4").innerHTML = "1964.";
                    $("#answer").hide();
                    $("#confirm").hide();
                    $("#answer1").show();
                    $("#answer2").show();
                    $("#answer3").show();
                    $("#answer4").show();
                    $(".btn").click(function(){
                        document.getElementById("demo").innerHTML = data.cetvrto;
                        $("#answer").show();
                        $("#confirm").show();
                        $("#answer1").hide();
                        $("#answer2").hide();
                        $("#answer3").hide();
                        $("#answer4").hide();
                        $(".btn").click(function(){
                            document.getElementById("demo").innerHTML = data.peto;
                            document.getElementById("answer1").innerHTML = "crkava";
                            document.getElementById("answer2").innerHTML = "knjiga";
                            document.getElementById("answer3").innerHTML = "insekata";
                            document.getElementById("answer4").innerHTML = "rada";
                            $("#answer").hide();
                            $("#confirm").hide();
                            $("#answer1").show();
                            $("#answer2").show();
                            $("#answer3").show();
                            $("#answer4").show();
                            $(".btn").click(function(){
                                document.getElementById("demo").innerHTML = data.sesto;
                                $("#answer").show();
                                $("#confirm").show();
                                $("#answer1").hide();
                                $("#answer2").hide();
                                $("#answer3").hide();
                                $("#answer4").hide();
                                $(".btn").click(function(){
                                    document.getElementById("demo").innerHTML = data.sedmo;
                                    document.getElementById("answer1").innerHTML = "Eni";
                                    document.getElementById("answer2").innerHTML = "Leni";
                                    document.getElementById("answer3").innerHTML = "Tina";
                                    document.getElementById("answer4").innerHTML = "Dženi";
                                    $("#answer").hide();
                                    $("#confirm").hide();
                                    $("#answer1").show();
                                    $("#answer2").show();
                                    $("#answer3").show();
                                    $("#answer4").show();
                                    $(".btn").click(function(){
                                        document.getElementById("demo").innerHTML = data.osmo;
                                        $("#answer").show();
                                        $("#confirm").show();
                                        $("#answer1").hide();
                                        $("#answer2").hide();
                                        $("#answer3").hide();
                                        $("#answer4").hide();
                                        $(".btn").click(function(){
                                            document.getElementById("demo").innerHTML = data.deveto;
                                            document.getElementById("answer1").innerHTML = "Barselona";
                                            document.getElementById("answer2").innerHTML = "CSKA";
                                            document.getElementById("answer3").innerHTML = "Olimpijakos";
                                            document.getElementById("answer4").innerHTML = "Real Madrid";
                                            $("#answer").hide();
                                            $("#confirm").hide();
                                            $("#answer1").show();
                                            $("#answer2").show();
                                            $("#answer3").show();
                                            $("#answer4").show();
                                            $(".btn").click(function(){
                                                document.getElementById("demo").innerHTML = data.deseto;
                                                $("#answer").show();
                                                $("#confirm").show();
                                                $("#answer1").hide();
                                                $("#answer2").hide();
                                                $("#answer3").hide();
                                                $("#answer4").hide();
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })      
});

