const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");

let countervalue = 0;
increment.addEventListener("click",function (event) {
  countervalue += 1;
  counter.innerHTML = countervalue;
});
decrement.addEventListener("click",function (event) {
  countervalue -= 1;
  counter.innerHTML = countervalue;
});
reset.addEventListener("click",function (event) {
  countervalue = 0;
  counter.innerHTML = countervalue;
});
