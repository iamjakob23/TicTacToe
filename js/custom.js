var isSqUsed      = new Array(false, false, false, false, false, false, false, false, false);
var pTurn;
var started       = false;
var name1         = "P1";
var name2         = "P2";
var currentImage  = "O";
var player1       = "X";
var player2       = "O";
var playerTurn    = 2;//2 = player1, 1 = player2
var gameCount     = 0;
var p1Wins        = 0;
var p2Wins        = 0;
var p1Picked      = new Array(0,0,0,0,0,0,0,0,0);
var p2Picked      = new Array(0,0,0,0,0,0,0,0,0);
var winningCombo  = new Array[
                    [1,2,3],
                    [4,5,6],
                    [7,8,9],
                    [1,4,7],
                    [2,5,8],
                    [3,6,9],
                    [1,5,9],
                    [3,5,7]//8 possible victory points
                ];

function playerCheck(){
    if(playerTurn === 1){
        currentImage = player2;
        playerTurn   = 2;
    }else{
        currentImage = player1;
        playerTurn   = 1;
    }
}

//function bottomButton(){
//    $('#botBut1').on('hidden.bs.popover', 'show')
//}

function pTurn(){
    if(playerTurn === 1){
        $('#pTurn').text("Turn X: "+ name2);
    }else{
        $('#pTurn').text("Turn O: " + name1);
    }
}

function updateWins(){
    if(playerTurn === 2){
        p1Wins++;
        $('#p1').text("O-" + name1 + ", Wins-" + p1Wins);
        alert(name1 + " Winner!");
        p1Picked      = new Array(0,0,0,0,0,0,0,0,0);
        p2Picked      = new Array(0,0,0,0,0,0,0,0,0);
        isSqUsed      = new Array(false, false, false, false, false, false, false, false, false);
    }else{
        p2Wins++;
        $('#p2').text("X-" + name2 + ", Wins-" + p2Wins);
        alert(name2 + " Winner!");
        p1Picked      = new Array(0,0,0,0,0,0,0,0,0);
        p2Picked      = new Array(0,0,0,0,0,0,0,0,0);
        isSqUsed      = new Array(false, false, false, false, false, false, false, false, false);
    }
}

function isWinner(){
    if(playerTurn === 2){
        currentPlayer = p1Picked;
    }else{
        currentPlayer = p2Picked;
    }
    if((currentPlayer[0] === 1) && (currentPlayer[1] === 2) && (currentPlayer[2] === 3)){
        updateWins();
    }else if(currentPlayer[3] === 4 && currentPlayer[4] === 5 && currentPlayer[5] === 6){
        updateWins();
    }else if(currentPlayer[6] === 7 && currentPlayer[7] === 8 && currentPlayer[8] === 9){
        updateWins();
    }else if(currentPlayer[0] === 1 && currentPlayer[3] === 4 && currentPlayer[6] === 7){
        updateWins();
    }else if(currentPlayer[1] === 2 && currentPlayer[4] === 5 && currentPlayer[7] === 8){
        updateWins();
    }else if(currentPlayer[2] === 3 && currentPlayer[5] === 6 && currentPlayer[8] === 9){
        updateWins();
    }else if(currentPlayer[0] === 1 && currentPlayer[4] === 5 && currentPlayer[8] === 9){
        updateWins();
    }else if(currentPlayer[2] === 3 && currentPlayer[4] === 5 && currentPlayer[6] === 7){
        updateWins();
    }
}

function clicked(){
    $('#sq1').click(function(){
        if(!isSqUsed[0]){
            if(playerTurn === 2){
                p1Picked[0] = 1;
            }else{
                p2Picked[0] = 1;
            }
            $('#sq1').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[0] = true;
            pTurn();
        }
    });

    $('#sq2').click(function(){
        if(!isSqUsed[1]){
            if(playerTurn === 2){
                p1Picked[1] = 2;
            }else{
                p2Picked[1] = 2;
            }
            $('#sq2').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[1] = true;
            pTurn();
        }
    });

    $('#sq3').click(function(){
        if(!isSqUsed[2]){
            if(playerTurn === 2){
                p1Picked[2] = 3;
            }else{
                p2Picked[2] = 3;
            }
            $('#sq3').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[2] = true;
            pTurn();
        }
    });

    $('#sq4').click(function(){
        if(!isSqUsed[3]){
            if(playerTurn === 2){
                p1Picked[3] = 4;
            }else{
                p2Picked[3] = 4;
            }
            $('#sq4').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[3] = true;
            pTurn();
        }
    });

    $('#sq5').click(function(){
        if(!isSqUsed[4]){
            if(playerTurn === 2){
                p1Picked[4] = 5;
            }else{
                p2Picked[4] = 5;
            }
            $('#sq5').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[4] = true;
            pTurn();
        }
    });

    $('#sq6').click(function(){
        if(!isSqUsed[5]){
            if(playerTurn === 2){
                p1Picked[5] = 6;
            }else{
                p2Picked[5] = 6;
            }
            $('#sq6').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[5] = true;
            pTurn();
        }
    });

    $('#sq7').click(function(){
        if(!isSqUsed[6]){
            if(playerTurn === 2){
                p1Picked[6] = 7;
            }else{
                p2Picked[6] = 7;
            }
            $('#sq7').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[6] = true;
            pTurn();
        }
    });

    $('#sq8').click(function(){
        if(!isSqUsed[7]){
            if(playerTurn === 2){
                p1Picked[7] = 8;
            }else{
                p2Picked[7] = 8;
            }
            $('#sq8').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[7] = true;
            pTurn();
        }
    });

    $('#sq9').click(function(){
        if(!isSqUsed[8]){
            if(playerTurn === 2){
                p1Picked[8] = 9;
            }else{
                p2Picked[8] = 9;
            }
            $('#sq9').text(currentImage);
            isWinner();
            playerCheck();
            setButtons();
            isSqUsed[8] = true;
            pTurn();
        }
    });
}
    
function resetGame(){
    location.reload();
}

function resetBoard(){
    isSqUsed[0] = false;
    isSqUsed[1] = false;
    isSqUsed[2] = false;
    isSqUsed[3] = false;
    isSqUsed[4] = false;
    isSqUsed[5] = false;
    isSqUsed[6] = false;
    isSqUsed[7] = false;
    isSqUsed[8] = false;
    currentImage = "";
    $('#sq1').text(currentImage);
    $('#sq2').text(currentImage);
    $('#sq3').text(currentImage);
    $('#sq4').text(currentImage);
    $('#sq5').text(currentImage);
    $('#sq6').text(currentImage);
    $('#sq7').text(currentImage);
    $('#sq8').text(currentImage);
    $('#sq9').text(currentImage);
    p1Picked = new Array(0,0,0,0,0,0,0,0,0);
    p2Picked = new Array(0,0,0,0,0,0,0,0,0);
    playerCheck();
    
}

function changeName1(){
    name1 = window.prompt("Enter Player 1's Name:");
    $('#p1').text("O-" + name1 + ", Wins-" + p1Wins);
}

function changeName2(){
    name2 = window.prompt("Enter Player 2's Name:");
    $('#p2').text("X-" +name2 + ", Wins-" + p2Wins);
}

function setButtons(){
    $('#sq1').unbind();
    $('#sq2').unbind();
    $('#sq3').unbind();
    $('#sq4').unbind();
    $('#sq5').unbind();
    $('#sq6').unbind();
    $('#sq7').unbind();
    $('#sq8').unbind();
    $('#sq9').unbind();
}