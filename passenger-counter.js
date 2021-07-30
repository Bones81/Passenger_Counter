// document.getElementById("count-el").innerText = 5;

//change the count-el in the HTML to reflect the new count

let count = 0;

let countEl = document.getElementById("count-el");
console.log(countEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}

let savedCount1 = "";
let savedCount2 = "";
let savedCount3 = "";
let previousEntries = document.getElementById("previous-entries");

function save() {
  console.log(count);
  let savedCount = count + " - ";
  previousEntries.textContent += savedCount;
  count = 0;
  countEl.textContent = 0;
}



