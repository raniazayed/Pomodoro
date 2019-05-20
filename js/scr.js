

var workTime;
var breakTime;
var resumeTime;

const startwork = document.getElementById('startwork');
const startbreak =document.getElementById('startbreak');
const resume = document.getElementById('resume');
const end = document.getElementById('end');
var sec1= document.getElementById('work');
var sec2= document.getElementById('break');



//events
startwork.addEventListener('click',startworkfn)
startbreak.addEventListener('click',startbreakfn)
resume.addEventListener('click',startresume)
end.addEventListener('click',startend)

// BTS FUNCTIONALITY
function btnsFunctionality(startBtn,breakBtn,resumeBtn,endBtn){
    startwork.disabled=startBtn;    
    startbreak.disabled=breakBtn; 
    resume.disabled=resumeBtn; 
    end.disabled=endBtn;      
}
// START WORK
function startworkfn(){
    playNotification();
    console.log('startwork');
    sec1.innerHTML ='work: '+'00'+':'+'00'+':'+'00';   
    sec2.innerHTML ='break: '+'00'+':'+'00'+':'+'00'; 
    startAnimation() 
    btnsFunctionality(true,false,true,false);
    pomdorowork();
}
function startbreakfn(){
    console.log('startbreak');
    btnsFunctionality(true,true,false,false);
    clearInterval(workTime);
    pomdorobreak();
    
}

// startresume function
function startresume(){
    clearInterval(breakTime);
    pomdororesume();
    btnsFunctionality(true,false,true,false)
}
// RESET AND DISPLAY RESULTS
function startend(){
    playNotification();
    stopAnimation()
    clearInterval(workTime);
    clearInterval(breakTime);
    clearInterval(resumeTime);
    breakCounter = 0; 
    workCounter = 0;
    sec1.innerHTML ="work : 00 : 00 : 00";   
    sec2.innerHTML ="break : 00 : 00 : 00";   
    btnsFunctionality(false,true,true,true)

  
}



let workCounter = 0 ;
let breakCounter = 0;
// pomdorowork
function pomdorowork(){
    var sec1= document.getElementById('work');
    workTime = setInterval(()=>{
        workCounter++;
        sec1.innerHTML='work :'+timeFormat(workCounter)
    },1000)
 
}
// pomdorobreak
function pomdorobreak(){
    var sec2= document.getElementById('break');
    breakTime = setInterval(()=>{
        breakCounter++;
        sec2.innerHTML='break :'+timeFormat(breakCounter)
    },1000)
    
}
// pomdororesume
function pomdororesume(){
    var breakCounter =0;
    resumeTime = setInterval(()=>{

        workCounter++;
        sec1.innerHTML='work :'+timeFormat(workCounter)
    },1000)
}


// TIME FORMAT
var timeFormat = function (counter) {
    var Time = function (counter) {
        if (counter < 10){
            return "0"+counter;
        }
        else{
            return counter;
        }
    }
    return [
        Time(Math.floor(counter / 3600)),      // HOURS FORMAT
        Time(Math.floor(counter % 3600 / 60)), // MINUTES FORMAT
        Time(Math.floor(counter % 60))         // SECONDES FORMAT
    ].join(' : '); 
}
function playNotification(){
        document.getElementById("notify").play();
}
function startAnimation() {
    var leftBall = document.getElementById("leftBall");
    leftBall.className += " leftMove";

    var rightBall = document.getElementById("rightBall");
    rightBall.className += " rightMove";
}

function stopAnimation() {
    var leftBall = document.getElementById("leftBall");
    leftBall.className = "box";

    var rightBall = document.getElementById("rightBall");
    rightBall.className = "box";
}

