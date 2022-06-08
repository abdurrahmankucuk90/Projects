const sub = document.querySelector(".submitButton");
const givDate = document.querySelector("#toDate");
const yazi = document.querySelector("#yazi")
const labYazi = document.querySelector("#checkBoxValue")
const arrDate = [];

sub.addEventListener("click", () => {
  fixDate(givDate.value);
  
});

function fixDate(a) {
  const arrDate1 = a.split("-");
  for (const i of arrDate1) {
    arrDate.splice(0, 0, i);
    arrDate.splice(3,arrDate.length)
  }
}
