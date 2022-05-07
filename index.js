// THIS COULD PROBABLY HAVE BEEN DONE EASIER WITH CANVAS BUT I WONT USE THAT //
const gridItem1 = document.getElementById("grid-item-1");
const gridItem2 = document.getElementById("grid-item-2");
const gridItem3 = document.getElementById("grid-item-3");
const gridItem4 = document.getElementById("grid-item-4");
const gridItem5 = document.getElementById("grid-item-5");
const gridItem6 = document.getElementById("grid-item-6");
const gridItem7 = document.getElementById("grid-item-7");
const gridItem8 = document.getElementById("grid-item-8");
const gridItem9 = document.getElementById("grid-item-9");

let grids = {
    grid1: {
        value: "",
        used: false
    },
    grid2: {
        value: "",
        used: false
    },
    grid3: {
        value: "",
        used: false
    },
    grid4: {
        value: "",
        used: false
    },
    grid5: {
        value: "",
        used: false
    },
    grid6: {
        value: "",
        used: false
    },
    grid7: {
        value: "",
        used: false
    },
    grid8: {
        value: "",
        used: false
    },
    grid9: {
        value: "",
        used: false
    },
}
let xTurn = true;

function reset() {
    gridItem1.textContent = "Click"
    gridItem2.textContent = "Click"
    gridItem3.textContent = "Click"
    gridItem4.textContent = "Click"
    gridItem5.textContent = "Click"
    gridItem6.textContent = "Click"
    gridItem7.textContent = "Click"
    gridItem8.textContent = "Click"
    gridItem9.textContent = "Click"
    grids.grid1.value = "";
    grids.grid1.used = false;
    grids.grid2.value = "";
    grids.grid2.used = false;
    grids.grid3.value = "";
    grids.grid3.used = false;
    grids.grid4.value = "";
    grids.grid4.used = false;
    grids.grid5.value = "";
    grids.grid5.used = false;
    grids.grid6.value = "";
    grids.grid6.used = false;
    grids.grid7.value = "";
    grids.grid7.used = false;
    grids.grid8.value = "";
    grids.grid8.used = false;
    grids.grid9.value = "";
    grids.grid9.used = false;
}

function xWin() {
    console.log("Player X Won");
    xTurn = true;
    reset()
}

function oWin() {
    console.log("Player O Won");
    xTurn = true;
    reset()
}

function checkIfTie() {
    if((grids.grid1.value != "") && (grids.grid2.value != "") && (grids.grid3.value != "") && (grids.grid4.value != "") && (grids.grid5.value != "") && (grids.grid6.value != "") && (grids.grid7.value != "") && (grids.grid8.value != "") && (grids.grid9.value != "")) {
        console.log("Tie");
        xTurn = true;
        reset()
    }
}

function checkIfXWin() {
    if((grids.grid1.value === "x") && (grids.grid2.value === "x") && (grids.grid3.value === "x")) {
        xWin();
    }
    if((grids.grid4.value === "x") && (grids.grid5.value === "x") && (grids.grid6.value === "x")) {
        xWin();
    }  
    if((grids.grid7.value === "x") && (grids.grid8.value === "x") && (grids.grid9.value === "x")) {
        xWin();
    }
    if((grids.grid1.value === "x") && (grids.grid4.value === "x") && (grids.grid7.value === "x")) {
        xWin();
    }
    if((grids.grid2.value === "x") && (grids.grid5.value === "x") && (grids.grid8.value === "x")) {
        xWin();
    }
    if((grids.grid3.value === "x") && (grids.grid6.value === "x") && (grids.grid9.value === "x")) {
        xWin();
    }
    if((grids.grid1.value === "x") && (grids.grid5.value === "x") && (grids.grid9.value === "x")) {
        xWin();
    }
    if((grids.grid3.value === "x") && (grids.grid5.value === "x") && (grids.grid7.value === "x")) {
        xWin();
    }
    checkIfTie();
} 
function checkIfOWin() {
    if((grids.grid1.value === "o") && (grids.grid2.value === "o") && (grids.grid3.value === "o")) {
        oWin();
    }
    if((grids.grid4.value === "o") && (grids.grid5.value === "o") && (grids.grid6.value === "o")) {
        oWin();
    }  
    if((grids.grid7.value === "o") && (grids.grid8.value === "o") && (grids.grid9.value === "o")) {
        oWin();
    }
    if((grids.grid1.value === "o") && (grids.grid4.value === "o") && (grids.grid7.value === "o")) {
        oWin();
    }
    if((grids.grid2.value === "o") && (grids.grid5.value === "o") && (grids.grid8.value === "o")) {
        oWin();
    }
    if((grids.grid3.value === "o") && (grids.grid6.value === "o") && (grids.grid9.value === "o")) {
        oWin();
    }
    if((grids.grid1.value === "o") && (grids.grid5.value === "o") && (grids.grid9.value === "o")) {
        oWin();
    }
    if((grids.grid3.value === "o") && (grids.grid5.value === "o") && (grids.grid7.value === "o")) {
        oWin();
    }
    checkIfTie();
} 

//Grid 1//

gridItem1.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid1.used === false) {
            gridItem1.textContent = "X"
            grids.grid1.value = "x";
            grids.grid1.used = true;
            console.log(grids.grid1);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid1.used === false) {
            gridItem1.textContent = "O"
            grids.grid1.value = "o";
            grids.grid1.used = true;
            console.log(grids.grid1);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 2//

gridItem2.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid2.used === false) {
            gridItem2.textContent = "X"
            grids.grid2.value = "x";
            grids.grid2.used = true;
            console.log(grids.grid2);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid2.used === false) {
            gridItem2.textContent = "O"
            grids.grid2.value = "o";
            grids.grid2.used = true;
            console.log(grids.grid2);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 3//

gridItem3.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid3.used === false) {
            gridItem3.textContent = "X"
            grids.grid3.value = "x";
            grids.grid3.used = true;
            console.log(grids.grid3);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid3.used === false) {
            gridItem3.textContent = "O"
            grids.grid3.value = "o";
            grids.grid3.used = true;
            console.log(grids.grid3);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 4//

gridItem4.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid4.used === false) {
            gridItem4.textContent = "X"
            grids.grid4.value = "x";
            grids.grid4.used = true;
            console.log(grids.grid4);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid4.used === false) {
            gridItem4.textContent = "O"
            grids.grid4.value = "o";
            grids.grid4.used = true;
            console.log(grids.grid4);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 5//

gridItem5.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid5.used === false) {
            gridItem5.textContent = "X"
            grids.grid5.value = "x";
            grids.grid5.used = true;
            console.log(grids.grid5);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid5.used === false) {
            gridItem5.textContent = "O"
            grids.grid5.value = "o";
            grids.grid5.used = true;
            console.log(grids.grid5);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 6//

gridItem6.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid6.used === false) {
            gridItem6.textContent = "X"
            grids.grid6.value = "x";
            grids.grid6.used = true;
            console.log(grids.grid6);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid6.used === false) {
            gridItem6.textContent = "O"
            grids.grid6.value = "o";
            grids.grid6.used = true;
            console.log(grids.grid6);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 7//

gridItem7.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid7.used === false) {
            gridItem7.textContent = "X"
            grids.grid7.value = "x";
            grids.grid7.used = true;
            console.log(grids.grid7);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid7.used === false) {
            gridItem7.textContent = "O"
            grids.grid7.value = "o";
            grids.grid7.used = true;
            console.log(grids.grid7);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 8//

gridItem8.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid8.used === false) {
            gridItem8.textContent = "X"
            grids.grid8.value = "x";
            grids.grid8.used = true;
            console.log(grids.grid8);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid8.used === false) {
            gridItem8.textContent = "O"
            grids.grid8.value = "o";
            grids.grid8.used = true;
            console.log(grids.grid8);
            xTurn = true;
            checkIfOWin();
        }
    }
})

//Grid 9//

gridItem9.addEventListener("click", function() {
    if(xTurn === true) {
        if(grids.grid9.used === false) {
            gridItem9.textContent = "X"
            grids.grid9.value = "x";
            grids.grid9.used = true;
            console.log(grids.grid9);
            xTurn = false;
            checkIfXWin();
        }
    } else if(xTurn === false) {
        if(grids.grid9.used === false) {
            gridItem9.textContent = "O"
            grids.grid9.value = "o";
            grids.grid9.used = true;
            console.log(grids.grid9);
            xTurn = true;
            checkIfOWin();
        }
    }
})
