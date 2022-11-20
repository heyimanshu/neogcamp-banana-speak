var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"


fucntion getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

fucntion errorHandler(erro) {
    console.log("error occured", error);
    alert("something wrong with server! Try again after some time")
}

function clickHandler() {
    outputDiv.innerText = " ajajjajaj " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler) 