'use strict'

var current = "X";

var board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_'] ];


window.onload = function () {

    function checkBoard() {
        /* top row check */
        if (board[0][0] == board[0][1] && board[0][0] == board[0][2] ) {
            alert("Player " + board[0][0] + " wins!");
        }
    }

    
    
    function computerMoves() {
        board[2][2] = current;
        document.getElementById("inner_9").innerHTML = current;
        current = "X";
    }
    

    /* when inner_1 is clicked, change the value to X or O */
    document.getElementById("inner_1").onclick = function () {
        /* change the clicked box to whoever's symbol is currently taking a turn */
        board[0][0] = current;
        document.getElementById("inner_1").innerHTML = current;
        checkBoard();

        /*
        if (document.getElementById("inner_2").innerHTML == current && document.getElementById("inner_3").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }
        

        if (document.getElementById("inner_4").innerHTML == current && document.getElementById("inner_7").innerHTML === current) {
            alert("3 in a row across the bottom, winner: " + current);
        }

        if (document.getElementById("inner_5").innerHTML == current && document.getElementById("inner_9").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }*/

        /* ..and then update the X to an O or vice versa */
        if (current == "X") {
            current = "O";
            computerMoves();
        } else if (current == "O") {
            current = "X";
        }


    }

    document.getElementById("inner_2").onclick = function () {
        board[0][1] = current;
        document.getElementById("inner_2").innerHTML = current;
        checkBoard();


        /*
        if (document.getElementById("inner_1").innerHTML == current && document.getElementById("inner_3").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }
        

        if (document.getElementById("inner_5").innerHTML == current && document.getElementById("inner_8").innerHTML === current) {
            alert("3 in a row across the bottom, winner: " + current);
        }*/

        if (current == "X") {
            current = "O";
            computerMoves();
        } else if (current == "O") {
            current = "X";
        }
    }

    document.getElementById("inner_3").onclick = function () {
        board[0][2] = current;
        document.getElementById("inner_3").innerHTML = current;
        checkBoard();

        /*
        if (document.getElementById("inner_1").innerHTML == current && document.getElementById("inner_2").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }
        

        if (document.getElementById("inner_6").innerHTML == current && document.getElementById("inner_9").innerHTML === current) {
            alert("3 in a row across the bottom, winner: " + current);
        }

        if (document.getElementById("inner_5").innerHTML == current && document.getElementById("inner_7").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }*/

        if (current == "X") {
            current = "O";
            computerMoves();
        } else if (current == "O") {
            current = "X";
        }

    }

    document.getElementById("inner_4").onclick = function () {
        document.getElementById("inner_4").innerHTML = current;
        checkBoard();

        /*if (document.getElementById("inner_1").innerHTML == current && document.getElementById("inner_7").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }

        if (document.getElementById("inner_5").innerHTML == current && document.getElementById("inner_6").innerHTML === current) {
            alert("3 in a row across the bottom, winner: " + current);
        }*/

        if (current == "X") {
            current = "O";
            computerMoves();
        } else if (current == "O") {
            current = "X";
        }
    }
    
    document.getElementById("inner_5").onclick = function () {
        document.getElementById("inner_5").innerHTML = current;
        checkBoard();

        /*if (document.getElementById("inner_2").innerHTML == current && document.getElementById("inner_8").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }

        if (document.getElementById("inner_4").innerHTML == current && document.getElementById("inner_6").innerHTML === current) {
            alert("3 in a row across the bottom, winner: " + current);
        }

        if (document.getElementById("inner_1").innerHTML == current && document.getElementById("inner_9").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }

        if (document.getElementById("inner_3").innerHTML == current && document.getElementById("inner_7").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }*/

        if (current == "X") {
            current = "O";
            computerMoves();
        } else if (current == "O") {
            current = "X";
        }
    }
    document.getElementById("inner_6").onclick = function () {
        document.getElementById("inner_6").innerHTML = current;
         checkBoard();


       /* if (document.getElementById("inner_3").innerHTML == current && document.getElementById("inner_9").innerHTML === current) {
            alert("3 in a row across the bottom, winner: " + current);
        }

        if (document.getElementById("inner_4").innerHTML == current && document.getElementById("inner_5").innerHTML === current) {
            alert("3 in a row across, winner: " + current);
        }"*/

        if (current == "X") {
            current = "O";
            computerMoves();
        } else if (current == "O") {
            current = "X";
        }
    }
    document.getElementById("inner_7").onclick = function () {
        document.getElementById("inner_7").innerHTML = current;
         checkBoard();

        /*if (document.getElementById("inner_1").innerHTML == current && document.getElementById("inner_4").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }

        if (document.getElementById("inner_8").innerHTML == current && document.getElementById("inner_9").innerHTML === current) {
            alert("3 in a row bottm, winner: " + current);
        }

        if (document.getElementById("inner_3").innerHTML == current && document.getElementById("inner_5").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }*/

        if (current == "X") {
            current = "O";
             computerMoves();

        } else if (current == "O") {
            current = "X";
        }
    }
    document.getElementById("inner_8").onclick = function () {
        document.getElementById("inner_8").innerHTML = current;
         checkBoard();

        /*if (document.getElementById("inner_2").innerHTML == current && document.getElementById("inner_5").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }

        if (document.getElementById("inner_7").innerHTML == current && document.getElementById("inner_9").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }*/

        if (current == "X") {
            current = "O";
            computerMoves();
        } else if (current == "O") {
            current = "X";
        }
    }
    document.getElementById("inner_9").onclick = function () {
        document.getElementById("inner_9").innerHTML = current;
       checkBoard();

        /*if (document.getElementById("inner_3").innerHTML == current && document.getElementById("inner_6").innerHTML === current) {
            alert("3 in a row across the top, winner: " + current);
        }

        if (document.getElementById("inner_7").innerHTML == current && document.getElementById("inner_9").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }

        if (document.getElementById("inner_1").innerHTML == current && document.getElementById("inner_5").innerHTML === current) {
            alert("3 in a row diagonally, winner: " + current);
        }*/

        if (current == "X") {
            current = "O";
             computerMoves();
        } else if (current == "O") {
            current = "X";
        }
    }
    /* wire up boxes 2 & 3 for X and O */

}
