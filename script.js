const countDisp = document.getElementById("count");
let count =0;
const incbtn = document.getElementById("inc");
const resbtn = document.getElementById("res");
const decbtn = document.getElementById("dec");
incbtn.addEventListener("click",() =>{
    count++;
    updateDisplay();
});
decbtn.addEventListener("click",() =>{
    count--;
    updateDisplay();
});
resbtn.addEventListener("click", () => {
    count =0;
    updateDisplay();
});
function updateDisplay(){
    countDisp.textContent=count;ō
if (count > 0) {
    countDisp.style.color = "green";
  } else if (count < 0) {
    countDisp.style.color = "red";
  } else {
    countDisp.style.color = "#333";
  }
}