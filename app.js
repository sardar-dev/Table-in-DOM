let input = document.querySelector("input");
let btn = document.querySelector("button");
let output = document.querySelector("p");

function clicks() {
  let tableof = Number(input.value); //table of
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += ` ${tableof} x  ${i} = ${i * tableof} ` + "<br>";

    input.value = "";
  }

  output.innerHTML = result;
}
