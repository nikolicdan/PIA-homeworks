const startButton = document.getElementById('start-btn')
const question = document.getElementById('question-container')
startButton.addEventListener('click', startGame)
document.getElementById('answer1').onclick=function() {
    correct1(1)
}
document.getElementById('answer2').onclick=function() {
    correct1(2)
}
document.getElementById('answer3').onclick=function() {
    correct1(3)
}
document.getElementById('answer4').onclick=function() {
    correct1(4)
}
document.getElementById('confirm').onclick=function() {
    correct1(document.getElementById("answer").value.toLowerCase())
}
document.getElementById('next').onclick=function() {
    correct1(5)
}
fetch("quiz.json")
    .then(response => response.json())
    .then(data1 =>{data=data1})
function makeQuestionAndAnswer(){
    if(i%2==0){
        reset()
        document.getElementById("question").innerHTML = data[i].q;
        document.getElementById("answer1").innerHTML = data[i].a1q;
        document.getElementById("answer2").innerHTML = data[i].a2q;
        document.getElementById("answer3").innerHTML = data[i].a3q;
        document.getElementById("answer4").innerHTML = data[i].a4q;
        console.log(data[i].correct)
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
var i=0
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    question.classList.remove('hide')  
    makeQuestionAndAnswer() 
} 
function correct1(e){
    if(e==5){
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
                document.body.classList.add('correct')
                setTimeout(makeQuestionAndAnswer,3000)
            }
            else{
                document.body.classList.add('wrong')
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
                document.body.classList.add('correct')
                setTimeout(makeQuestionAndAnswer,3000)
            }
            else{
                document.body.classList.add('wrong')
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
}   

