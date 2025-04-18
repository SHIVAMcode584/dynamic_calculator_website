const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');
const resultBanner = document.querySelector('.result-banner');
const playerWin = document.querySelector('#playerWin');
const playAgn = document.querySelector('#play-agn-btn');
const exitBtn = document.querySelector('#exit-btn');
const crackers = document.querySelector('.crackers');


let turnO = true;//player = X or O;

const winPattern = [ //All the win patterns/possibilities
    [0 , 1, 2],
    [3 , 4, 5],
    [6 , 7, 8],
    [0 , 3, 6],
    [1 , 4, 7],
    [2 , 5, 8],
    [0 , 4, 8],
    [2 , 4, 6]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (box.innerText !== '' || box.disabled) return;
        box.innerText = turnO ? 'O' : 'X';
        //InterChnage the chance consecutively;
        // if (turnO === true){
        //     turnO = false;
        // }else{
        //     turnO = true;
        // }

        turnO = !turnO;
        box.disabled = true;
        checkWin();//Check win condition on each click.
    });
});
const disabelButton = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};

function checkWin(){
    for (let patterns of winPattern){
       
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != '' &&
            pos2Val != ''&& 
            pos3Val != ''){
                if (pos1Val === pos2Val && pos2Val=== pos3Val){
                       resultBannerfunc(pos1Val);
                       disabelButton();
                       return;
            };
        
        
       
    }
    let allFilled = true;
    for (let box of boxes){
        if (box.innerText === ''){
            allFilled = false;
            // break;
        }
    }

    if (allFilled){
        resultBannerfunc('Draw');
        return;
    }

}}

resetBtn.addEventListener('click',()=>{
    boxes.forEach((box) =>{
        box.innerText = '';
        box.disabled = false;
        
})
});

//Calling banner
const resultBannerfunc = (winner)=>{
    if (winner === 'Draw'){
        playerWin.innerText = "It's a tie!";
        resultBanner.classList.add('result-banner-act');
        resetBtn.disabled = true;
    }else{
    playerWin.innerText = `Player ${winner} wins!`
    resultBanner.classList.add('result-banner-act');
    crackers.classList.add('crackers-act');

    resetBtn.disabled = true;
}
}

//PlayAgain button
playAgn.addEventListener('click'  , () =>{
    resultBanner.classList.remove('result-banner-act');
    crackers.classList.remove('crackers-act');

    playerWin.innerText = '';
    boxes.forEach((box) =>{
        box.innerText = '';
        box.disabled = false;
        
})
    resetBtn.disabled = false;
})


;