const timeLeftDisplay = document.querySelector('#time-left')
let timeLeft = 20
var timer
document.getElementById("name").value = ''
const startButton = document.getElementById('start-btn')
const question = document.getElementById('question-container')
startButton.addEventListener('click', instructions)
document.getElementById('begin').onclick= function(){
    startGame()
    document.getElementById('begin').classList.add('hide')
}
document.getElementById('answer1').onclick=function() {
    correct1(1)
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
}
document.getElementById('answer2').onclick=function() {
    correct1(2)
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;;
}
document.getElementById('answer3').onclick=function() {
    correct1(3)
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
}
document.getElementById('answer4').onclick=function() {
    correct1(4)
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
}
document.getElementById('confirm').onclick=function() {
    correct1(document.getElementById("answer").value.toLowerCase())
    document.getElementById("answer").value = ''
    document.getElementById("confirm").disabled = true;
}
document.getElementById('next').onclick=function() {
    correct1(5)
}
document.getElementById('quit').onclick=function() {
    i=0
    endGame()
}
document.getElementById('again').onclick=function() {
    resetGame()
    document.getElementById('again').classList.add('hide')
}
fetch("quiz.json")
    .then(response => response.json())
    .then(data1 =>{data=data1})
function makeQuestionAndAnswer(){
    clearInterval(timer)
    timer = setInterval(countDown,1000)
    timeLeft = 21
    if(i==10){
        endGame()
    }
    else{
        if(i%2==0){
            reset()
            document.getElementById("question").innerHTML = data[i].q;
            document.getElementById("answer1").innerHTML = data[i].a1q;
            document.getElementById("answer2").innerHTML = data[i].a2q;
            document.getElementById("answer3").innerHTML = data[i].a3q;
            document.getElementById("answer4").innerHTML = data[i].a4q;
            document.getElementById('answer1').classList.remove('hide')
            document.getElementById('answer2').classList.remove('hide')
            document.getElementById('answer3').classList.remove('hide')
            document.getElementById('answer4').classList.remove('hide')
            document.getElementById('answer').classList.add('hide')
            document.getElementById('confirm').classList.add('hide')        
        }
        else{
            reset()
            document.getElementById("question").innerHTML = data[i].q;
            document.getElementById('answer1').classList.add('hide')
            document.getElementById('answer2').classList.add('hide')
            document.getElementById('answer3').classList.add('hide')
            document.getElementById('answer4').classList.add('hide')
            document.getElementById('answer').classList.remove('hide')
            document.getElementById('confirm').classList.remove('hide')
        }
        i+=1; 
    }   
}
var i=0
var poeni=0
function instructions(){
    startButton.classList.add('hide')
    document.getElementById('name').classList.add('hide')
    document.getElementById('instruction').classList.remove('hide')
    document.getElementById('begin').classList.remove('hide')
}
function startGame() {
    document.getElementById('instruction').classList.add('hide')
    question.classList.remove('hide')  
    makeQuestionAndAnswer() 
} 
function correct1(e){
    if(e==5){
        clearInterval(timer)
        document.body.classList.add('true')
        if(data[i-1].correct==1){
            document.getElementById('answer1').classList.add('true')
        }
        else if(data[i-1].correct==2){
            document.getElementById('answer2').classList.add('true')
        }
        else if(data[i-1].correct==3){
            document.getElementById('answer3').classList.add('true')
        }
        else{
            document.getElementById('answer4').classList.add('true')
        }
        setTimeout(makeQuestionAndAnswer,3000)
    }
    else{
        if(i%2==1){
            if(e==data[i-1].correct){
                clearInterval(timer)
                document.body.classList.add('correct')
                poeni=poeni+10
                setTimeout(makeQuestionAndAnswer,3000)
            }
            else{
                clearInterval(timer)
                document.body.classList.add('wrong')
                poeni=poeni-5
                if(data[i-1].correct==1){
                    document.getElementById('answer1').classList.add('true')
                }
                else if(data[i-1].correct==2){
                    document.getElementById('answer2').classList.add('true')
                }
                else if(data[i-1].correct==3){
                    document.getElementById('answer3').classList.add('true')
                }
                else{
                    document.getElementById('answer4').classList.add('true')
                }
                setTimeout(makeQuestionAndAnswer,3000)
            }
        }
        else{
            if(data[i-1].aq==e){
                clearInterval(timer)
                document.body.classList.add('correct')
                poeni=poeni+10
                setTimeout(makeQuestionAndAnswer,3000)
            }
            else{
                clearInterval(timer)
                document.body.classList.add('wrong')
                poeni=poeni-5
                setTimeout(makeQuestionAndAnswer,3000)
            }
        }
    }
}
function reset(){
    document.body.classList.remove('correct')
    document.body.classList.remove('wrong')
    document.body.classList.remove('true')
    document.getElementById('answer1').classList.remove('true')
    document.getElementById('answer2').classList.remove('true')
    document.getElementById('answer3').classList.remove('true')
    document.getElementById('answer4').classList.remove('true')
    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer4").disabled = false;
    document.getElementById("confirm").disabled = false;
}   
function resetGame(){
    startButton.classList.remove('hide')
    document.getElementById('name').classList.remove('hide')
    question.classList.add('hide')
    document.getElementById('score').classList.add('hide')
}
function endGame(){
    question.classList.add('hide')
    document.getElementById('score').classList.remove('hide')
    document.getElementById('again').classList.remove('hide')
    document.body.classList.remove('correct')
    document.body.classList.remove('wrong')
    document.body.classList.remove('true')
    document.getElementById('score1').innerHTML = poeni
    poeni=0
    i=0
}
let countDown = ()=>{
    if(timeLeft==0){
        clearInterval(timer)
        setTimeout(makeQuestionAndAnswer,3000)
        document.body.classList.add('true')
    }
    else{
        timeLeft-=1
        document.getElementById('time-left').innerHTML = timeLeft
    }
}
