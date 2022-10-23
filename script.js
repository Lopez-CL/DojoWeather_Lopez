//remove pop up//
var getCookie = document.querySelector("#cookie-pop");
function popAccept() {
    getCookie.remove();
}

//alert loading message//
function messageLoad() {
    alert("Loading weather report...");
}

//conversion of temp//
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}
function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}
var tempHigh = document.querySelectorAll(".high");
var tempLow = document.querySelectorAll(".low");
function tempConversion(element) {
    if (element.value == "°F") {
        for (var i = 0; i < tempHigh.length; i++) {
            tempHigh[i].innerText = parseInt(tempHigh[i].innerText);
            tempHigh[i].innerText = c2f(tempHigh[i].innerText) + "°";
        }
        for (var i = 0; i < tempLow.length; i++) {
            tempLow[i].innerText = parseInt(tempLow[i].innerText);
            tempLow[i].innerText = c2f(tempLow[i].innerText) + "°";
        }
    }
    else {
        for (var i = 0; i < tempHigh.length; i++) {
            tempHigh[i].innerText = parseInt(tempHigh[i].innerText);
            tempHigh[i].innerText = f2c(tempHigh[i].innerText) + "°";
        }
        for (var i = 0; i < tempLow.length; i++) {
            tempLow[i].innerText = parseInt(tempLow[i].innerText);
            tempLow[i].innerText = f2c(tempLow[i].innerText) + "°";
        }
    }
}

//JS from solution. Simpler in the JS, a little particular and time consuming in HTML, but probably makes more sense. When I have multiple classes or ids I need to consider the ways I can iterate through them. This is an excellent way to iterate through something apart from SelectorAll.//

/*
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}*/
