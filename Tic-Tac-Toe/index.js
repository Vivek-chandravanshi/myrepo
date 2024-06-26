
const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const button = document.querySelector('.btn');

let currentPlayer;
let gameGrid;
let winnerFound = false;
let draw =false;

const winningPositions =[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

function initGame(){
    currentPlayer = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box)=>{
        box.innerText = "";
        box.style.pointerEvents = "all";
        box.classList.remove('win');
    })
    winnerFound=false;
    draw=false;
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    button.classList.remove('active');
}

initGame();

function swapTurn(){
    if(currentPlayer==='X') currentPlayer='O';
    else currentPlayer = 'X';
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}
boxes.forEach((box, index)=>{
    box.addEventListener('click', () => {
        handleClick(index);
    })
});
function handleClick(index){
    
    if(gameGrid[index]===""){
        console.log('hello');
        gameGrid[index] = currentPlayer;
        boxes[index].innerText = currentPlayer;
        checkGameOver();
        if(winnerFound || draw){
            button.classList.add('active');
            console.log('before return');
            return;
        }
        swapTurn();
    }
}

function checkGameOver(){
    winningPositions.forEach((position)=>{
        // console.log('inside checking');
        if(gameGrid[position[0]]!=="" && gameGrid[position[0]]===gameGrid[position[1]] && gameGrid[position[1]]===gameGrid[position[2]]){
            gameInfo.innerText = `Winner Player - ${gameGrid[position[0]]}`;
            // console.log(gameGrid[position[0]]);
            // console.log('condition true');
            winnerFound=true;
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })
        }
    })
    if(!winnerFound){
        if(!gameGrid.includes("")){
            gameInfo.innerText = "it's a draw!";
            draw=true;
        }
        // if(!gameGrid.includes("")) console.log('tied');
    }
}

button.addEventListener('click', initGame);