var sec=0;
var min=0;
var hours =0;
var startwork = document.getElementById('startwork');
var startbreak =document.getElementById('startbreak')
var resume = document.getElementById('resume')
var end = document.getElementById('end')
var sec1= document.getElementById('work');
var sec2= document.getElementById('break');
var summary=document.querySelector('.result')
var totalwork = document.getElementById('totalwork');
var totalbreak = document.getElementById('totalbreak');


//events
startwork.addEventListener('click',startworkfn)
startbreak.addEventListener('click',startbreakfn)
resume.addEventListener('click',startresume)
end.addEventListener('click',startend)



function startworkfn(){
    playNotification();
    console.log('startwork');
    sec1.innerHTML ='work: '+'00'+':'+'00'+':'+'00';   
    sec2.innerHTML ='break: '+'00'+':'+'00'+':'+'00'; 
    startAnimation() 
    startwork.disabled=true;    //disable
    startbreak.disabled=false; //enable
    resume.disabled=true;   //disnable
    end.disabled=false;      //enable
    pomdorowork();
}
function startbreakfn(){
    console.log('startbreak');
    startbreak.disabled=true;   //disable
    resume.disabled=false; 
    pomdorobreak();
    
}

// startresume function
function startresume(){

    clearInterval(intervalId2);
    pomdorowork();
    startbreak.disabled=false;   //disable
    resume.disabled=true;


}
function startend(){
    playNotification();
    stopAnimation()
    clearInterval(intervalId2);
    clearInterval(intervalId);
   
    sec1.innerHTML ='Total work: '+hourswork+' :' +minwork+' : '+work;   
    sec2.innerHTML ='Total break: '+hours+' : '+min+' : '+sec;   
    
    startwork.disabled=false;    //enable
    startbreak.disabled=true; //enable
    resume.disabled=true;   //disable
    end.disabled=true;      //disable
     work =0;
     minwork=0;
     hourswork=0;
     sec=0;
     min=0;
     hours = 0;
  
}

var intervalId;
var work =0 ;
var minwork=0;
var hourswork=0;
var timing;

function pomdorowork(){
    var sec1= document.getElementById('work');
    function counter(){
        return work++;
    }
    intervalId = setInterval(function(){
    var timing = counter(); 
    if(timing<10){
        timing = "0"+timing;
    }
    
    sec1.innerHTML ='Work: '+hourswork+' : '+minwork+' : '+timing;   
    if(timing==59){
        minwork++;
        if(minwork<10){
            minwork = "0"+minwork;
        }
        work = 0;
        if(minwork==59){
            hourswork++;
            if(hourswork<10){
                hourswork = "0"+hourswork;
            }
            minwork=0;
        }
    timing = counter();
    }
  


    }, 1000);
}
var intervalId2;
function pomdorobreak(){
    clearInterval(intervalId);
    var sec2= document.getElementById('break');
    function counter(){
        return sec++;
    }
    intervalId2 = setInterval(() => {
       var timing = counter(); 
       if(timing<10){
        timing = "0"+timing;
       }
       sec2.innerHTML ='Break: '+hours+' : '+min+' : '+timing;   
        if(timing==59){
            min++;
            if(minwork<10){
                minwork = "0"+minwork;
            }
            sec=0;
            if(min==59){
                hours++;
                if(hourswork<10){
                    hourswork = "0"+hourswork;
                }
                min=0;
             
            }
            timing =  counter();
            }
       
    
    }, 1000);
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

