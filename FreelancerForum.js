const freelancers = [
  { name: "Carol", price: 70, occupation: "Programmer" },
  { name: "Stan", price: 50, occupation: "Teacher" },
  { name: "Alex", price: 80, occupation: "Programmer" },
  { name: "Natasha", price: 45, occupation: "Teacher"},
  { name: "Jordan", price: 20, occupation: "Artist"},
  { name: "Dr.James", price: 150, occupation: "Doctor"},
  { name: "Sarah", price: 25, occupation: "Trainer"},
  { name: "Dr.Pepper", price: 150, occupation: "Doctor"},
];


//Function 2: Calculating the Average Starting Prices
const avgPrice = document.getElementById("AvgStartPrice")
// const table = document.querySelector(".MainTable")
function averagePrice(){
    let sum = 80;
    for (let i = 0; i < freelancers.length; i++) {
        const element = freelancers[i];
        let totalPrice = element.price
        sum += +totalPrice;
    } 
    const average = sum / freelancers.length;
    document.getElementById("AvgStartPrice").textContent = Math.round(average);
    // return average;
}


//Function 3: Stops the injection of entries once length of freelancers array is equal to table row entries
function stopInterval(){
    if (freelancers.length === 0) {
        clearInterval(newTimer);
    }
}


//Final Function: "Renderer"
function createFreeLancer(freelancers){
    stopInterval(newTimer);
    const table = document.querySelector('table')
    const newFreelancer = freelancers.shift()
    const newTr = document.createElement('tr')
    newTr.innerHTML = `<td>${newFreelancer.name}</td><td>${newFreelancer.price}</td><td>${newFreelancer.occupation}</td>`
    table.appendChild(newTr);
    averagePrice();
}

const newTimer = setInterval(()=>createFreeLancer(freelancers), 2000)