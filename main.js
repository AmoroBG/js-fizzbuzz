const input = document.querySelector("input");
const button = document.querySelector("button");
const results = document.querySelector("#results");

button.addEventListener("click", function fizzBuzz() {
  const number = input.value;
  let values = [];
  let count;
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      count = " FizzBuzz";
    } else if (i % 5 == 0) {
      count = " Buzz";
    } else if (i % 3 == 0) {
      count = " Fizz";
    } else {
      count = " " + i;
    }
    values.push(count);
    results.innerHTML = values;
    console.log(count);
  }
});
