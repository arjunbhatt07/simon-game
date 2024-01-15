let gameSeq = [];
let usedSeq = [];
let btns = ["yellow" , "red" , "purple" , "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress" , function() {
    if (started == false) {
        console.log("game is stared");
        started = true;

        levelUp();
    }

});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    } , 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    } , 200);
}



function levelUp () {
usedSeq = [];
level++;
h2.innerText = `Level ${level}`;

let randIdx = Math.floor(Math.random() * 3);
let randomColor = btns[randIdx];
let randomBtn = document.querySelector(`.${randomColor}`);
gameSeq.push(randomColor);
console.log(gameSeq);
gameFlash(randomBtn);

}
function checkAns (idx) {
 
 if (usedSeq[idx]===gameSeq[idx]) {
    if (usedSeq.length===gameSeq.length) {
        setTimeout(levelUp , 1000);
    }
 } else {
    h2.innerHTML = `Game Over! Your score was <b>${level} </b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "white"; 
    }, 130);
    reset();
 }
}


function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    usedSeq.push(userColor);

    checkAns(usedSeq.length-1);
};

let allBtns = document.querySelectorAll (".btn");
for (btn of allBtns) {
 btn.addEventListener("click" , btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    usedSeq = [];
    level = 0;

}