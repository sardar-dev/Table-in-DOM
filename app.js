let input = document.querySelector("input");
let output = document.querySelector("p");

function execute(event) {
  event.preventDefault();

  if (input.value === "" || input.value === " " || input.value === "0") {
    output.innerHTML = "Please enter the valid number";

    return;
  }

  let number = Number(input.value);

  output.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    output.innerHTML += `${number} x ${i} = ${number * i} <br> `;
  }
}
