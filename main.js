// for selecting the buttons
const buttonclick = document.querySelectorAll(".buttonplayer");
const resetButton = document.querySelector(".reset");  // reset button
const newgame = document.querySelector(".new");  // new game
const msg = document.querySelector(".winner");  // message container
const para = document.querySelector(".parawinner"); // paragraph

// adding the events
newgame.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

// to check the winning pattern
const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// to enter the game
let turnO = true;

for (let i = 0; i < buttonclick.length; i++) {
    const button = buttonclick[i];

    // to add event
    button.addEventListener("click", print);

    function print() {
        console.log("button clicked");
        if (turnO) {
            button.textContent = "O";
            turnO = false;
        } else {
            button.textContent = "X";
            turnO = true;
        }
        button.disabled = true;

        //  the checkWinner function
        checkWinner();
    }
}


function checkWinner() {
    // to loop the winning pattern
    for (let p of winningpattern) {
        // get the box  with the index
        let posval1 = buttonclick[p[0]].textContent;
        let posval2 = buttonclick[p[1]].textContent;
        let posval3 = buttonclick[p[2]].textContent;

        if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log("winner");
                winner(posval1);
            }
        }
    }
}

// to disable the buttons
function disableButtons() {
    for (let box of buttonclick) {
        box.disabled = true;
    }
}

// to display the winner message

function winner(winner) {
    para.textContent = `The Winner is ${winner}`;
    msg.classList.remove("hide");
    disableButtons();
}

// Reset function
function resetGame() {
    // for empty
    para.textContent = "";
    turnO = true;
    enableButtons();

    //to hide for new game or reset
    msg.classList.add("hide");

    // Clear all button text
    buttonclick.forEach(button => {
        button.textContent = "";
    });
}

// to enable the  all the buttons
function enableButtons() {
    for (let box of buttonclick) {
        box.disabled = false;
    }
}
