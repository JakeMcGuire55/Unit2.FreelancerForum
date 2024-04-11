const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
  { name: "Name4", price: 1, occupation: "occupation"},
  { name: "Name5", price: 1, occupation: "occupation"},
  { name: "Name6", price: 1, occupation: "occupation"},
  { name: "Name7", price: 1, occupation: "occupation"},
  { name: "Name8", price: 1, occupation: "occupation"},
];

const myTable = document.querySelector("table");

function updateEntry() {
  for (let i = 2; i < freelancers.length; i++) {
    const currentItem = freelancers[i];
    const newEntry = document.createElement("tr");
    newEntry.textContent = currentItem;
    myTable.appendChild(newEntry);
  }
}
