var num = 0;
var i = 0;
 
const addNumbers = () =>{

    i++;
    if(i % 2 == 1 ){
        num = num + i;  
    }

    if(i > 25){
        clearInterval();
        document.getElementById("main-display").innerHTML = `Sum total is ${num}`;
        num = 0;
        i = 0;
    }else{
        document.getElementById("main-display").innerHTML = `Sum is now ${num} on ${i} iteration`;
    }
}

const wait = (miliseconds) => {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }