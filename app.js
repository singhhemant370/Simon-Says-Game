let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];
let highScore = 0;

document.addEventListener("keypress", function(){
    
    if(started == false){
        document.querySelector("h1").innerText = `Simon Says Game, High Score: ${highScore}`;
        console.log("game started");
        started = true;
        levelUp();
    }
    
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){

    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random button chosse

    let randIdx = Math.floor(Math.random() * 3);  // random index for random button
    let randColor = btns[randIdx];  // random color for button
    let randBtn = document.querySelector(`.${randColor}`); // random btn selected
    
    gameSeq.push(randColor);
    gameFlash(randBtn);
    console.log(gameSeq);
}

function checkAns(idx){
    // console.log(`current level: ${level}`);

    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
       }
    }else{
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to start`;
        let body = document.querySelector("body");
        body.classList.add("gameOver");
        setTimeout(() => {
            body.classList.remove("gameOver");
        }, 500);
        reset();
    }

}

function btnPress(){
    // console.log("button was pressed");
    console.log(this);
    let btn = this;
    userFlash(this);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);

    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    if(highScore < level){
        highScore = level;
    }
    level = 0;
    started = false;
}

