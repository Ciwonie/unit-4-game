//Global Variables
var computerScore;
var dataGenerate;
var userScore = 0;
var newGame = true;
var roundOver = false;
var assignedData = false;
var wins = 0;
var loses = 0;

//onClick function to start a game--determines if game is a new one. if not, it will not initialize
$(document).on('click', '#initialize', function () {
    if (newGame) {
        initialize();
        newGame = false;
    }
})

//this will reset most of the mechanics
function initialize() {
    generateComputerScore();
    generateCrystalNumbers();
    assignData();
    $('#computerScore').html(computerScore);
    $('#userScore').html(userScore);
    userScore = 0;
    roundOver = false;
    $('#userScore').html(userScore);
    $('#crystalButton1').html("Ruby");
    $('#crystalButton2').html("Emerald");
    $('#crystalButton3').html("Sapphire");
    $('#crystalButton4').html("Citrine");
}

//this function generates random numbers for our crystals
function generateCrystalNumbers() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

//this function assigns a hidden data attribute to our crystals
function assignData() {
    $('#crystalButton1').attr('data-crystal-value', generateCrystalNumbers());
    $('#crystalButton2').attr('data-crystal-value', generateCrystalNumbers());
    $('#crystalButton3').attr('data-crystal-value', generateCrystalNumbers());
    $('#crystalButton4').attr('data-crystal-value', generateCrystalNumbers());
    assignedData = true;
}

//this function generates a random computer score when called
function generateComputerScore() {
    computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(computerScore);
}

//this function if a series of if/else to determine what happens when our crystals get clicked
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

    if (userScore === computerScore) {
        displayOverlay('You Win!');
    }
    else if (userScore > computerScore) {
        displayOverlay('You Lost.');
    }
});

//this if statement gives track of chagning the html of the crystal buttons
if (newGame) {
        $(document).on('click', '#crystalButton1', function () {
            $('#crystalButton1').html("Ruby" + '<br>' + $(this).attr('data-crystal-value'));
        });
        $(document).on('click', '#crystalButton2', function () {
            $('#crystalButton2').html("Emerald" + '<br>' + $(this).attr('data-crystal-value'));
        });
        $(document).on('click', '#crystalButton3', function () {
            $('#crystalButton3').html("Sapphire" + '<br>' + $(this).attr('data-crystal-value'));
        });
        $(document).on('click', '#crystalButton4', function () {
            $('#crystalButton4').html("Citrine" + '<br>' + $(this).attr('data-crystal-value'));
        });
}

//These last three functions are designed for an overlay which appears if you win/lose. The code idea was found on w3School
function displayOverlay(text) {
    $("<table id='overlay'><tbody><tr><td>" + text + "</td></tr></tbody></table>").css({
        "position": "fixed",
        "top": "30%",
        "left": "30%",
        "width": "40%",
        "height": "25%",
        "margin": "0 auto",
        "background-color": "rgba(0,0,0,.7)",
        "z-index": 10000,
        "vertical-align": "middle",
        "text-align": "center",
        "color": "#fff",
        "font-size": "100px",
        "font-weight": "bold",
        "border-radius": "4px",
        "font-family": "Roboto, sans-serif",
        "padding": "15px",
    }).appendTo("body");
}

$('body').on('click', function (e) {
    removeOverlay();
})

function removeOverlay() {
    $("#overlay").remove();
}





















