let userNum = 0;
let rdNum = 0;
let resultNum = 0;
let result='';
let pcMove ='';
score_verify();
function game(){
if (Math.random()<=1/3){
    rdNum = 1;
    pcMove = 'Rock';
} else if (Math.random()<=2/3){
    rdNum = 2;
    pcMove = 'Paper';
} else {
    rdNum = 3;
    pcMove = 'Scissors';
};
resultNum = userNum - rdNum ;
if (resultNum === 0){
    result = `Tie both you and the computer picked ${pcMove}`;
    wlt.ties ++;
}else if (resultNum === 1 || resultNum === -2){
    result = `You Won !! you picked ${userMove} and the coputer picked ${pcMove}`;
    wlt.wins ++;
}else{
    result = `You lost you picked ${userMove} and the coputer picked ${pcMove}`;
    wlt.loses ++;
};
localStorage.setItem('wltN',JSON.stringify(wlt));
document.querySelector(".wins_text").innerHTML = wlt.wins;
document.querySelector(".loses_text").innerHTML = wlt.loses;
document.querySelector(".ties_text").innerHTML = wlt.ties;
round_details ();
return result,resultNum;
};
function rock(){
userMove='Rock';
userNum=1;
game();
};
function paper(){
userMove='Paper';
userNum=2;
game();
};
function scissors(){
userMove='Scissors';
userNum=3;
game();
};
function score(){
score_verify();
wlt = JSON.parse(localStorage.getItem('wltN')) || {wins : 0,loses : 0,ties : 0};
alert(`You have won ${wlt.wins} times ,loste ${wlt.loses} times and tied ${wlt.ties} tiems`)
};
function resetScore(){
localStorage.removeItem('wltN');    
score_verify();    
document.querySelector(".wins_text").innerHTML = wlt.wins;
document.querySelector(".loses_text").innerHTML = wlt.loses;
document.querySelector(".ties_text").innerHTML = wlt.ties;
};
let rps = {
rock,
paper,
scissors,
};
function score_verify (){
wlt = JSON.parse(localStorage.getItem('wltN')) || {wins : 0,loses : 0,ties : 0};
};
function score_updater () {
score_verify();
document.querySelector(".wins_text").innerHTML = wlt.wins;
document.querySelector(".loses_text").innerHTML = wlt.loses;
document.querySelector(".ties_text").innerHTML = wlt.ties;
};
/*function round_details () {
if (resultNum === 0){
    document.querySelector('.round_details').innerHTML=;
}else if (resultNum === 1 || resultNum === -2){
    console.log('win');
}else{
    console.log('lose')
};
};*/