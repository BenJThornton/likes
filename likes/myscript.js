var count = 0;
var count2 = 0;
var count3 = 0;

var countElement = document.querySelector("#count1");
var count2Element = document.querySelector("#count2");
var count3Element = document.querySelector("#count3");

var likebtnElement = document.querySelector("likebtn");

function like1() {
    count++;
    countElement.innerText = count + " like(s)";
    likebtnElement.style.boxShadow = "0px 0px";
}

function like2() {
    count2++;
    count2Element.innerText = count2 + " like(s)";
    likebtnElement.style.boxShadow = "0px 0px";
}

function like3() {
    count3++;
    count3Element.innerText = count3 + " like(s)";
    likebtnElement.style.boxShadow = "0px 0px";
}