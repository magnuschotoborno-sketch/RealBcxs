let Zbtn = document.getElementById("Zbtn");
const Inc = document.getElementById("Inc");
const Res = document.getElementById("Res");
const Dec = document.getElementById("Dec");
let StartNum = 0;

function updateScreen(){
    Zbtn.textContent = StartNum;
    if(StartNum > 0){
        Zbtn.style.color = "rgba(43, 255, 0, 1)";
    }
    else if(StartNum < 0){
        Zbtn.style.color = "rgba(255, 0, 0, 1)";
    }
    else{
        Zbtn.style.color = "rgba(0, 183, 255, 1)";
    }
}
updateScreen();
Inc.onclick = function(){
    StartNum++;
    updateScreen();
}
Res.onclick = function(){
    StartNum = 0;
    updateScreen();
}
Dec.onclick = function(){
    StartNum--;
    updateScreen();
}