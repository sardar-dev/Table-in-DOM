let input = document.querySelector("input");
let btn = document.querySelector("button");
let output = document.querySelector("p");

function clicks() {
  if (input.value === "" || input.value === " " || input.value === "0") {
    output.innerHTML = "Enter a valid number";
    return;
  }

  let tableof = Number(input.value); // table of
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += ` ${tableof} x  ${i} = ${i * tableof} ` + "<br>";
    input.value = "";
  }

  output.innerHTML = result;
}
