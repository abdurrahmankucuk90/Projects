const sub = document.querySelector(".submitButton");
const givDate = document.querySelector("#toDate");
const yazi = document.querySelector("#taskToDo");
const labYazi = document.querySelector("#checkBoxValue");
const toDoYazi = document.querySelector("#toDoText");
const divs = document.querySelector(".div");
const arrDate = [];
sub.addEventListener("click", () => {
  if (toDoYazi.value == 0) {
    alert("Please write something here");
  } else {
    fixDate(givDate.value);
    // console.log(givDate.value.split("-"));  
    document.querySelector(".listUl").innerHTML += `<li class="listElement">
    <div class="toDoSentence">
      <div class="div">
        <label class="custom-checkbox">
          <input type="checkbox" name="duty" id="checkBox"/>
          <span class="checkmark"></span>
        </label>
        <p id="checkBoxValue">${arrDate.join("")}</p>
        <p id="taskToDo">${toDoYazi.value}</p>
      </div>
      <i class="fa-solid fa-trash-can"></i>
    </div>        
    
  </li>`;
    toDoYazi.value = "";
  }
});

const listUl = document.querySelector(".listUl");
console.log(listUl);

listUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
  }
});

function fixDate(a) {
  const arrDate1 = a.split("-");
  arrDate1.reverse();
  console.log(arrDate1);
  for (const i of arrDate1) {
    console.log(i);  
  }
  arrDate.splice(0, 4, arrDate1.join("."));
}
