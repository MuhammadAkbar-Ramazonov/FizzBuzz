

// 1-vazifa

var elFormFizz = document.querySelector(".site-fizbuz-form");
var elInput = elFormFizz.querySelector(".site-input");
var elAlert = document.querySelector(".site-alert");

elFormFizz.addEventListener("submit", function(evt){
    evt.preventDefault()
    
    var inputValue = elInput.value;
    
    if (inputValue % 3 == 0 && inputValue % 5 == 0){
        elAlert.textContent = "FizzBuzz !";
    } else if (inputValue % 3 == 0){
        elAlert.textContent = "Fizz !";
    } else if (inputValue % 5 == 0 ){
        elAlert.textContent = "Buzz !";
    } else{
        elAlert.textContent = "Bu son 3ga ham 5ga ham bo'linmaydi !";
    }
    elInput.value = ""
})



// 2 vazifa

// var elAlisher = Number(prompt("Alisher qancha pulin bor?"));
// var sumDollar = 10900;
// var sumEuro = 12277;
// var sumSamalot = 500 * sumDollar;
// var sumMexmonxona = sumDollar * 250;
// var sumMuzey = sumEuro * 120;
// var sumAll = sumSamalot + sumMexmonxona + sumMuzey;


// if (elAlisher >= sumAll){
//     console.log("Alosher gooo!");
// } else {
//     console.log("Alisher atmen uyda otir)");
// }


// 3 vazifa

var elDollarForm = document.querySelector(".site-dollar-form");

var elUserMoney = document.querySelector(".site-dollar-input");
var elAllSum = document.querySelector(".cost");
var elSelect = document.querySelector(".site-select");

elDollarForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    var elCostMoney = elUserMoney.value * elSelect.value;
    elAllSum.textContent = elCostMoney;
})


// 4 vazifa

var elFindInput = document.querySelector(".find-input")
var elFindForm = document.querySelector(".find-form")
var elFindStep = document.querySelector(".step")
var elFindResult = document.querySelector(".find-result")
var randomBtn = document.querySelector(".find-btn")
var elFindAlert = document.querySelector(".find-alert");
var elFindStepNum = 6;

elFindForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var elRandom = Math.round(Math.random() * 100);
    console.log(elRandom)
    var findInputValue = Number(elFindInput.value);
    var findAlertValue = elFindAlert.value;
    elFindStepNum--;
    elFindInput.value = ""
    elFindStep.textContent = `${elFindStepNum} ta urinish qoldi`
    if(elRandom == findInputValue){
        elFindResult.textContent = "WIN"
        elFindInput.setAttribute("disabled", "")
        randomBtn.setAttribute("disabled", "")
    } else if(elFindStepNum === 0 && elRandom != findInputValue){
        elFindResult.textContent = "LOSE"
        elFindResult.classList.add("bg-danger")
        elFindInput.setAttribute("disabled","")
        randomBtn.setAttribute("disabled","")
    }  else if(elRandom != findInputValue && findInputValue > elRandom){
        elFindAlert.textContent = "son x sondan katta";
    } else if(elRandom != findInputValue && findInputValue < elRandom){
        elFindAlert.textContent = "son x sondan kichik";
    }
})
