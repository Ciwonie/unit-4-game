//Global Variables
var computerScore;
var dataGenerate;
var userScore = 0;
var newGame = true;
var roundOver = false;
var wins = 0;
var loses = 0;

$(document).on('click', '#initialize', function () {
    if (newGame) {
        initialize();
        newGame = false;
    }
})

function initialize() {
    generateComputerScore();
    generateCrystalNumbers();
    assignData();
    $('#computerScore').html(computerScore);
    $('#userScore').html(userScore);
    userScore = 0;
    roundOver = false;
    $('#userScore').html(userScore);
}

function generateCrystalNumbers() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

function assignData() {
    $('#crystalButton1').attr('data-crystal-value', generateCrystalNumbers());
    $('#crystalButton2').attr('data-crystal-value', generateCrystalNumbers());
    $('#crystalButton3').attr('data-crystal-value', generateCrystalNumbers());
    $('#crystalButton4').attr('data-crystal-value', generateCrystalNumbers());
}

function generateComputerScore() {
    computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(computerScore);
}

$(document).on('click', '.crystalButtons', function () {
    console.log($(this).attr('data-crystal-value'));

    if (roundOver) {
        return;
    }
    else if (!roundOver) {
        userScore += parseInt($(this).attr('data-crystal-value'));
        $('#userScore').html(userScore);
    }

    if (userScore === computerScore) {
        wins++;
        $('.winScore').html(wins);
        roundOver = true;
        newGame = true;
    }
    else if (userScore > computerScore) {
        loses++;
        $('.loseScore').html(loses);
        roundOver = true;
        newGame = true;
    }
});



















