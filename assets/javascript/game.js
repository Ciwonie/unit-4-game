//Global Variables
var imageArray = ["https://www.gemselect.com/graphics/red-imperial-topaz-gemstone-small-gemselect-1.jpg", "https://www.gemselect.com/graphics/red-imperial-topaz-gemstone-small-gemselect-1.jpg", "https://www.gemselect.com/graphics/red-imperial-topaz-gemstone-small-gemselect-1.jpg", "https://www.gemselect.com/graphics/red-imperial-topaz-gemstone-small-gemselect-1.jpg"]
var computerScore;
var dataGenerate;
var userScore;

createCrystal();
generateComputerScore();
generateCrystalNumbers();
dataKey();


function createCrystal() {
    for (i = 0; i < imageArray.length; i++) {
        $('.crystals').append(`<img class="crystal" src=${imageArray[i]}>`);
    };

};

function generateCrystalNumbers() {
    dataGenerate = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(dataGenerate);
}

function generateComputerScore() {
    computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(computerScore);
}

function dataKey() {
    $('.crystal').each(function (e) {
        $('.crystal').attr('value', generateCrystalNumbers());
    })
    // $('.crystal').attr('value', generateCrystalNumbers());
}

$(document).on('click', '.crystal', 'value', function() {
    userScore += $(this).val();
    console.log(userScore);
});













