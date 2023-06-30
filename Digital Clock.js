realClock();

function realClock() {
  var date = new Date();

  document.querySelector(".front").innerHTML =`${checkDigit(date.getHours())}:${checkDigit(date.getMinutes())}:${checkDigit(date.getSeconds())}`
  
  setTimeout("realClock()", 1000);
};

function checkDigit(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

