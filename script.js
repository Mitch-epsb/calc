let b1 = document.getElementById("inp-b1");
let b2 = document.getElementById("inp-b2");
let h = document.getElementById("inp-h");
let calc = document.getElementById("btn-calc");
let ans = document.getElementById("out");
let check = document.getElementById("check");
let unit = document.getElementById("dropd");

calc.addEventListener("click", runcalc);

function runcalc() {
  //input
  let num1 = Number(b1.value);
  let num2 = Number(b2.value);
  let num3 = Number(h.value);
  let uni = unit.value;
  //process
  let output = 0.5 * (num1 + num2) * num3;
  output = output.toFixed(2) + uni;

  //output
  ans.innerHTML = output;
  ans.style.borderWidth = "2px";
  b1.value = " ";
  b2.value = " ";
  h.value = " ";
  check.innerHTML = `<img src="img/download.png" alt="" id="img">`;
}
