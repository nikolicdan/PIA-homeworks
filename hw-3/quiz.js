$("p").hide();
$("#start").hide();
$("#next1").hide();
$("#next2").hide();

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
            $("#next1").show();
            $("#start").hide();
            $("#instructions").hide();
            $("#next1").click(function(){
                document.getElementById("demo").innerHTML = data.drugo;
            })
        })
    })      
});
