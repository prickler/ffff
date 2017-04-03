var _xWins = 0;
var _oWins = 0;
var _draw = 0;

function startGame() {
    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
    }
    document.turn = "X";
    document.winner = null;
    setMessage(document.turn + " Zaczyna!");
    setx("statystyki x: " + _xWins);
    sety("statystyki O: " + _oWins);
    setDraw("Remisy: " + _draw);
}

function starterSwitch() {
    if (document.turn = "X") {
        setMessage("O Zaczyna!");
        document.turn = "O";
    } else {
        setMessage("X Zaczyna!");
        document.turn = "X";
    }
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function setx(msg) {
    document.getElementById("oWon").innerText = msg;
}

function sety(msg) {
    document.getElementById("xWon").innerText = msg;
}
function setDraw(msg) {
    document.getElementById("draws").innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.winner + ", Już wygrałeś!");
    } else if (square.innerText == "") {
        square.innerText = document.turn;
        changeTurn();
    } else setMessage("Zajęte miejsce!");
}

function changeTurn() {
    if (winnerChecker.winnerChecker(document.turn)) {
        setMessage("Gratualcje! " + document.turn);
        alert("Gratualcje! " + document.turn);
        document.winner = document.turn;
        statIncrease();
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("Teraz kolej: " + document.turn);
        checkForDraw();
    } else {
        document.turn = "X";
        setMessage("Teraz kolej: " + document.turn);
        checkForDraw();
    }
}

function countScore() {
    if (document.winner === 'O') {
        historyModule.oWon();
        oWon.innerHTML = historyModule.getTimesOWon();
    } else if (document.winner === 'X') {
        historyModule.xWon();
        xWon.innerHTML = historyModule.getTimesXWon();
    } else {
        historyModule.wasDraw();
        var theDiv = document.getElementById("draws");
        theDiv.innerHTML = historyModule.getTimesWasDraw();
    }
} 

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}

function checkForDraw() {
    if (document.getElementById("s1").innerText != "" &&
        document.getElementById("s2").innerText != "" &&
        document.getElementById("s3").innerText != "" &&
        document.getElementById("s4").innerText != "" &&
        document.getElementById("s5").innerText != "" &&
        document.getElementById("s6").innerText != "" &&
        document.getElementById("s7").innerText != "" &&
        document.getElementById("s8").innerText != "" &&
        document.getElementById("s9").innerText != "") {
        setMessage("Mamy Remis!");
        alert("Mamy Remis!");
        ++_draw;
        setDraw("Remisy: " + _draw);
    }
};

function statIncrease() {
    if (document.winner == "X") {
        ++_xWins;
        setx("statystyki x: " + _xWins);
    }
    else if (document.winner == "O") {
        ++_oWins;
        sety("statystyki O: " + _oWins);
    }
};

