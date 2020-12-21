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
console.log(document.getElementById("answer").value.toLowerCase());
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
            document.getElementById("answer1").onclick = function(){
                document.getElementById("answer1").style.backgroundColor="red";
                document.getElementById("answer2").style.backgroundColor="yellow";
                document.getElementById("answer1").disabled = true;
                document.getElementById("answer2").disabled = true;
                document.getElementById("answer3").disabled = true;
                document.getElementById("answer4").disabled = true;
                setTimeout(function1, 3000);
            };    
            document.getElementById("answer2").innerHTML = "1852.";
            document.getElementById("answer2").onclick = function(){
                document.getElementById("answer2").style.backgroundColor="green";
                document.getElementById("answer1").disabled = true;
                document.getElementById("answer2").disabled = true;
                document.getElementById("answer3").disabled = true;
                document.getElementById("answer4").disabled = true;
                setTimeout(function1, 3000);
            };           
            document.getElementById("answer3").innerHTML = "1952.";
            document.getElementById("answer3").onclick = function(){
                document.getElementById("answer3").style.backgroundColor="red";  
                document.getElementById("answer2").style.backgroundColor="yellow";
                document.getElementById("answer1").disabled = true;
                document.getElementById("answer2").disabled = true;
                document.getElementById("answer3").disabled = true;
                document.getElementById("answer4").disabled = true;          
                setTimeout(function1, 3000);
            };           
            document.getElementById("answer4").innerHTML = "1847.";
            document.getElementById("answer4").onclick = function(){
                document.getElementById("answer4").style.backgroundColor="red";
                document.getElementById("answer2").style.backgroundColor="yellow";
                document.getElementById("answer1").disabled = true;
                document.getElementById("answer2").disabled = true;
                document.getElementById("answer3").disabled = true;
                document.getElementById("answer4").disabled = true;
                setTimeout(function1, 3000);
            };   
                   
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            $("#start").hide();
            $("#instructions").hide();

            function function1() {   
                document.getElementById("answer1").style.backgroundColor="white";
                document.getElementById("answer2").style.backgroundColor="white";
                document.getElementById("answer3").style.backgroundColor="white";
                document.getElementById("answer4").style.backgroundColor="white";
                document.getElementById("answer1").disabled = false;
                document.getElementById("answer2").disabled = false;
                document.getElementById("answer3").disabled = false;
                document.getElementById("answer4").disabled = false;
  
                document.getElementById("demo").innerHTML = data.drugo;
                $("#answer").show();
                $("#confirm").show();
                $("#answer1").hide();
                $("#answer2").hide();
                $("#answer3").hide();
                $("#answer4").hide();
                $("#confirm").click(function(){
                    if(document.getElementById("answer").value.toLowerCase()=="danijel defo"){
                        document.getElementById("answer").style.backgroundColor="green";
                        setTimeout(function6, 3000);
                    }
                    else{
                        document.getElementById("answer").style.backgroundColor="red";
                        setTimeout(function6, 3000);
                    }
                });
            }

            function function6(){                      
                $("#answer").hide();
                $("#confirm").hide();
                $("#answer1").show();
                $("#answer2").show();
                $("#answer3").show();
                $("#answer4").show();  
                document.getElementById("answer").style.backgroundColor="white";    

                document.getElementById("demo").innerHTML = data.trece;
                document.getElementById("answer1").innerHTML = "1976.";
                document.getElementById("answer1").onclick = function(){
                    document.getElementById("answer1").style.backgroundColor="red";
                    document.getElementById("answer4").style.backgroundColor="yellow";
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;
                    setTimeout(function2, 3000);
                };
                document.getElementById("answer2").innerHTML = "1972.";
                document.getElementById("answer2").onclick = function(){
                    document.getElementById("answer2").style.backgroundColor="red";
                    document.getElementById("answer4").style.backgroundColor="yellow";
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;
                    setTimeout(function2, 3000);
                };
                document.getElementById("answer3").innerHTML = "1968.";
                document.getElementById("answer3").onclick = function(){
                    document.getElementById("answer3").style.backgroundColor="red";  
                    document.getElementById("answer4").style.backgroundColor="yellow";
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;          
                    setTimeout(function2, 3000);
                };
                document.getElementById("answer4").innerHTML = "1964.";
                document.getElementById("answer4").onclick = function(){
                    document.getElementById("answer4").style.backgroundColor="green";                        
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;
                    setTimeout(function2, 3000);
                };
            }

            function function2(){
                document.getElementById("answer1").style.backgroundColor="white";
                document.getElementById("answer2").style.backgroundColor="white";
                document.getElementById("answer3").style.backgroundColor="white";
                document.getElementById("answer4").style.backgroundColor="white";
                document.getElementById("answer1").disabled = false;
                document.getElementById("answer2").disabled = false;
                document.getElementById("answer3").disabled = false;
                document.getElementById("answer4").disabled = false;

                document.getElementById("demo").innerHTML = data.cetvrto;
                $("#answer").show();
                $("#confirm").show();
                $("#answer1").hide();
                $("#answer2").hide();
                $("#answer3").hide();
                $("#answer4").hide();
                $("#confirm").click(function(){
                    if(document.getElementById("answer").value.toLowerCase()=="urme"){
                        document.getElementById("answer").style.backgroundColor="green";
                        setTimeout(function7, 3000);
                    }
                    else{
                        document.getElementById("answer").style.backgroundColor="red";
                        setTimeout(function7, 3000);
                    }
                });
            }

            function function7(){
                $("#answer").hide();
                $("#confirm").hide();
                $("#answer1").show();
                $("#answer2").show();
                $("#answer3").show();
                $("#answer4").show();
                document.getElementById("answer").style.backgroundColor="white";

                document.getElementById("demo").innerHTML = data.peto;
                document.getElementById("answer1").innerHTML = "crkava";
                document.getElementById("answer1").onclick = function(){
                    document.getElementById("answer1").style.backgroundColor="red";
                    document.getElementById("answer3").style.backgroundColor="yellow";
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;
                    setTimeout(function3, 3000);
                };
                document.getElementById("answer2").innerHTML = "knjiga";
                document.getElementById("answer2").onclick = function(){
                    document.getElementById("answer2").style.backgroundColor="red";
                    document.getElementById("answer3").style.backgroundColor="yellow";
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;
                    setTimeout(function3, 3000);
                };
                document.getElementById("answer3").innerHTML = "insekata";
                document.getElementById("answer3").onclick = function(){
                    document.getElementById("answer3").style.backgroundColor="green";
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;          
                    setTimeout(function3, 3000);
                };
                document.getElementById("answer4").innerHTML = "rada";
                document.getElementById("answer4").onclick = function(){
                    document.getElementById("answer4").style.backgroundColor="red";
                    document.getElementById("answer3").style.backgroundColor="yellow";                        
                    document.getElementById("answer1").disabled = true;
                    document.getElementById("answer2").disabled = true;
                    document.getElementById("answer3").disabled = true;
                    document.getElementById("answer4").disabled = true;
                    setTimeout(function3, 3000);
                };
            }         

            function function3(){
                document.getElementById("answer1").style.backgroundColor="white";
                document.getElementById("answer2").style.backgroundColor="white";
                document.getElementById("answer3").style.backgroundColor="white";
                document.getElementById("answer4").style.backgroundColor="white";
                document.getElementById("answer1").disabled = false;
                document.getElementById("answer2").disabled = false;
                document.getElementById("answer3").disabled = false;
                document.getElementById("answer4").disabled = false;

                document.getElementById("demo").innerHTML = data.sesto;
                $("#answer").show();
                $("#confirm").show();
                $("#answer1").hide();
                $("#answer2").hide();
                $("#answer3").hide();
                $("#answer4").hide();
                $("#confirm").click(function(){
                    if(document.getElementById("answer").value.toLowerCase()=="stolar"){
                        document.getElementById("answer").style.backgroundColor="green";
                        setTimeout(function8, 3000);
                    }
                    else{
                        document.getElementById("answer").style.backgroundColor="red";
                        setTimeout(function8, 3000);
                    }
                }); 
                function function8(){
                    $("#answer").hide();
                    $("#confirm").hide();
                    $("#answer1").show();
                    $("#answer2").show();
                    $("#answer3").show();
                    $("#answer4").show();
                    document.getElementById("answer").style.backgroundColor="white";

                    document.getElementById("demo").innerHTML = data.sedmo;
                    document.getElementById("answer1").innerHTML = "Eni";
                    document.getElementById("answer1").onclick = function(){
                        document.getElementById("answer1").style.backgroundColor="green";                            
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;
                        setTimeout(function4, 3000);
                    };
                    document.getElementById("answer2").innerHTML = "Leni";
                    document.getElementById("answer2").onclick = function(){
                        document.getElementById("answer2").style.backgroundColor="red";
                        document.getElementById("answer1").style.backgroundColor="yellow";
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;
                        setTimeout(function4, 3000);
                    };
                    document.getElementById("answer3").innerHTML = "Tina";
                    document.getElementById("answer3").onclick = function(){
                        document.getElementById("answer3").style.backgroundColor="red";
                        document.getElementById("answer1").style.backgroundColor="yellow";
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;          
                        setTimeout(function4, 3000);
                    };
                    document.getElementById("answer4").innerHTML = "Dženi";
                    document.getElementById("answer4").onclick = function(){
                        document.getElementById("answer4").style.backgroundColor="red";
                        document.getElementById("answer1").style.backgroundColor="yellow";                        
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;
                        setTimeout(function4, 3000);
                    };
                }
            }    

            function function4(){
                document.getElementById("answer1").style.backgroundColor="white";
                document.getElementById("answer2").style.backgroundColor="white";
                document.getElementById("answer3").style.backgroundColor="white";
                document.getElementById("answer4").style.backgroundColor="white";
                document.getElementById("answer1").disabled = false;
                document.getElementById("answer2").disabled = false;
                document.getElementById("answer3").disabled = false;
                document.getElementById("answer4").disabled = false;

                document.getElementById("demo").innerHTML = data.osmo;
                $("#answer").show();
                $("#confirm").show();
                $("#answer1").hide();
                $("#answer2").hide();
                $("#answer3").hide();
                $("#answer4").hide();
                $("#confirm").click(function(){
                    if(document.getElementById("answer").value.toLowerCase()=="0"){
                        document.getElementById("answer").style.backgroundColor="green";
                        setTimeout(function9, 3000);
                    }
                    else{
                        document.getElementById("answer").style.backgroundColor="red";
                        setTimeout(function9, 3000);
                    }
                });
                function function9(){                    
                    $("#answer").hide();
                    $("#confirm").hide();
                    $("#answer1").show();
                    $("#answer2").show();
                    $("#answer3").show();
                    $("#answer4").show();
                    document.getElementById("answer").style.backgroundColor="white";

                    document.getElementById("demo").innerHTML = data.deveto;
                    document.getElementById("answer1").innerHTML = "Barselona";
                    document.getElementById("answer1").onclick = function(){
                        document.getElementById("answer1").style.backgroundColor="red"; 
                        document.getElementById("answer3").style.backgroundColor="yellow";                            
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;
                        setTimeout(function5, 3000);
                    };
                    document.getElementById("answer2").innerHTML = "CSKA";
                    document.getElementById("answer2").onclick = function(){
                        document.getElementById("answer2").style.backgroundColor="red";
                        document.getElementById("answer3").style.backgroundColor="yellow";
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;
                        setTimeout(function5, 3000);
                    };
                    document.getElementById("answer3").innerHTML = "Olimpijakos";
                    document.getElementById("answer3").onclick = function(){
                        document.getElementById("answer3").style.backgroundColor="green";
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;          
                        setTimeout(function5, 3000);
                    };
                    document.getElementById("answer4").innerHTML = "Real Madrid";
                    document.getElementById("answer4").onclick = function(){
                        document.getElementById("answer4").style.backgroundColor="red";
                        document.getElementById("answer3").style.backgroundColor="yellow";                        
                        document.getElementById("answer1").disabled = true;
                        document.getElementById("answer2").disabled = true;
                        document.getElementById("answer3").disabled = true;
                        document.getElementById("answer4").disabled = true;
                        setTimeout(function5, 3000);
                    }
                }
            }

            function function5(){
                document.getElementById("answer1").style.backgroundColor="white";
                document.getElementById("answer2").style.backgroundColor="white";
                document.getElementById("answer3").style.backgroundColor="white";
                document.getElementById("answer4").style.backgroundColor="white";
                document.getElementById("answer1").disabled = false;
                document.getElementById("answer2").disabled = false;
                document.getElementById("answer3").disabled = false;
                document.getElementById("answer4").disabled = false;
                
                document.getElementById("demo").innerHTML = data.deseto;
                $("#answer").show();
                $("#confirm").show();
                $("#answer1").hide();
                $("#answer2").hide();
                $("#answer3").hide();
                $("#answer4").hide();
                $("#confirm").click(function(){
                    if(document.getElementById("answer").value.toLowerCase()=="dalai lama"){
                        document.getElementById("answer").style.backgroundColor="green";
                        setTimeout(function10, 3000);
                    }
                    else{
                        document.getElementById("answer").style.backgroundColor="red";
                        setTimeout(function10, 3000);
                    }
                });
                function function10(){
                    document.getElementById("answer").style.backgroundColor="white";
                    $("#demo").hide();
                    $("#answer").hide();
                    $("#confirm").hide();
                    $("#answer1").hide();
                    $("#answer2").hide();
                    $("#answer3").hide();
                    $("#answer4").hide();
                }
            }
        })    
    })
})
        
    

            

