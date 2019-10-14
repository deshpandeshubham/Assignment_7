/*eslint-env browser*/

//STEP 1
function displayMessage() {
    window.alert("I have been clicked");
}

function init() {
    //STEP 2
    var buttonElement1 = document.getElementById("uniqueButton1");
    buttonElement1.onclick = function () {
        window.alert("I have been clicked");
    }

    //STEP 3
    var buttonElement2 = document.getElementById("uniqueButton2");
    function userDefinedFunction() {
        window.alert("I have been clicked");
    }
    buttonElement2.addEventListener("click", userDefinedFunction);

    //STEP 4
    var buttonElement3 = document.getElementById("uniqueButton3");
    buttonElement3.addEventListener("click", function() {
        window.alert("I have been clicked");
    });

    //STEP 5
    buttonElement3.addEventListener("click", function() {
        window.alert("I have been clicked");
    });
}
window.addEventListener("load", init);
