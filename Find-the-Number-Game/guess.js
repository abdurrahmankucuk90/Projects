function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min).toFixed(0);
}
// console.log(getRandomArbitrary(1, 100));

const input = document.querySelector("#inp");
const button = document.querySelector(".check");
const info = document.querySelector("#information");
let randomNumber = getRandomArbitrary(1, 100);
let b;
let counter = 5;
let max = 100;
let min = 1;

console.log(randomNumber);

button.addEventListener("click", () => {
  if (counter > 0) {
    if (input.value < min || input.value > max) {
      alert(`Please enter a digit between ${min} to ${max}`);
      input.value = "";
    } else if (input.value < randomNumber) {
      min = input.value;
      info.innerText = `You need to guess higher number ${min}-${max}`;
      info.style.color = "green";
      counter--;
      input.value = "";
    } else if (input.value > randomNumber) {
      max = input.value;
      info.innerText = `You need to guess lower number ${min}-${max}`;
      info.style.color = "red";
      counter--;
      input.value = "";
      randomNumber = getRandomArbitrary(1, 100);
    } else if (input.value == randomNumber) {
      alert("Conguragulation you won");
      counter = 5;
      max = 100;
      min = 1;
      input.value = "";
      info.innerText = "";
      randomNumber = getRandomArbitrary(1, 100);
    }
  } else if (counter == 0) {
    alert(`You lost, rigt number was ${randomNumber}`);
    counter = 5;
    max = 100;
    min = 1;
    input.value = "";
    info.innerText = "";
  }
});

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    if (counter > 0) {
      if (input.value < min || input.value > max) {
        alert(`Please enter a digit between ${min} to ${max}`);
        input.value = "";
      } else if (input.value < randomNumber) {
        min = input.value;
        info.innerText = `You need to guess higher number ${min}-${max}`;
        info.style.color = "green";
        counter--;
        input.value = "";
      } else if (input.value > randomNumber) {
        max = input.value;
        info.innerText = `You need to guess lower number ${min}-${max}`;
        info.style.color = "red";
        counter--;
        input.value = "";
      } else if (input.value == randomNumber) {
        alert("Conguragulation you won");
        counter = 5;
        max = 100;
        min = 1;
        input.value = "";
        info.innerText = "";
        randomNumber = getRandomArbitrary(1, 100);
      }
    } else if (counter == 0) {
      alert(`You lost, rigt number was ${randomNumber}`);
      counter = 5;
      max = 100;
      min = 1;
      input.value = "";
      info.innerText = "";
      randomNumber = getRandomArbitrary(1, 100);
    }
  }
});
