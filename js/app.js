'use strict';
// console.log('test');

let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Salmon(site, minCust, maxCust, avgCokies) {
  this.site = site;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCokies = avgCokies;
  this.salesPerHourArray = [];
  this.dailySaleTotal = 0;
}

let seattle = new Salmon('Seattle', 23, 65, 6.3);
let tokyo = new Salmon('Tokyo', 3, 24, 1.2);
let paris = new Salmon('Paris', 20, 38, 2.3);
let lima = new Salmon('Lima', 2, 16, 4.6);
let dubai = new Salmon('Dubai', 11, 38, 3.7);

let Locations = [seattle, tokyo, dubai, lima, paris];
let allHourlyTotal = [];
let grandTotal = 0;


let table = document.getElementById('store');

//method >>random
Salmon.prototype.randomNumCustPerHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}; // generate a randome number of customers per hour

//method
Salmon.prototype.getAvgCookiesHour = function () {
  let hourlyCookies = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyCookies = (Math.floor(this.randomNumCustPerHour(this.minCust, this.maxCust) * this.avgCokies));
    this.salesPerHourArray.push(hourlyCookies);
    this.dailySaleTotal += hourlyCookies;
  } //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generate
};
//rendermethod
Salmon.prototype.render = function () {
  this.getAvgCookiesHour();

  let tableRow = document.createElement('tr');//
  let tableData = document.createElement('td');//

  tableData.textContent = this.site;
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);

  for (let i= 0; i < this.salesPerHourArray.length; i++){

    let tableSales = document.createElement('td');
    tableSales.textContent = this.salesPerHourArray[i];
    tableRow.appendChild(tableSales);

  }

  let tableTotal = document.createElement('td');
  tableTotal.textContent = this.dailySaleTotal;

  tableRow.appendChild(tableTotal);

};


function getTotal() {
  for(let i = 0; i < hours.length; i++){

    let hourlyTotal = 0;
    for(let j = 0; j < Locations.length; j++){

      hourlyTotal += Locations[j].salesPerHourArray[i];
    }
    grandTotal += hourlyTotal;

    allHourlyTotal[i] = hourlyTotal;
  }
}
//creat head (location)
function renderHead() {
  let headRow = document.createElement('tr');
  let headStore = document.createElement('th');
  headStore.textContent = 'Locations';
  headRow.appendChild(headStore);
  table.appendChild(headRow);

  for (let i=0; i < hours.length; i++){
    let headHours = document.createElement('th');
    headHours.textContent = hours[i];
    headRow.appendChild(headHours);
  }

  let headTotal = document.createElement('th');
  headTotal.textContent = 'Location Total';
  headRow.appendChild(headTotal);
}

//create footer(totaal)
function renderFooter(){
  getTotal();
  let tRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = 'Total';

  tRow.appendChild(tableData);
  table.appendChild(tRow);

  for (let i= 0; i < allHourlyTotal.length; i++){
    let tableSales = document.createElement('td');
    tableSales.textContent = allHourlyTotal[i];
    tRow.appendChild(tableSales);
  }
  let tableTotal = document.createElement('td');

  tableTotal.textContent = grandTotal;
  tRow.appendChild(tableTotal);
}

renderHead();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderFooter();



let form=document.getElementById('maramForm');

// let addButton=document.getElementById('submit');
let tableData = document.createElement('td');
// tableData.appendChild(tableData);

// function newSite() {

// }

form.addEventListener('submit',function(event){
  event.preventDefault();

  let newLocation=event.target.site.value;
  tableData.textContent=newLocation;
  newLocation.innerHTML = document.getElementById('location').value;
  table.appendChild(newLocation);

  let newMin = parseInt(event.target.minCust.value);
  newMin.innerHTML = document.getElementById('min').value;
  table.appendChild(newMin);

  let newMax = parseInt(event.target.maxCust.value);
  newMax.innerHTML = document.getElementById('max').value;
  table.appendChild(newMax);

  let newAvg = parseInt(event.target.avgCokies.value);
  newAvg.innerHTML = document.getElementById('avg').value;
  table.appendChild(newAvg);


});

form.addEventListener('submit',addItem);
function addItem(){
  let submit=document.getElementById('submit');
  table.appendChild(submit);
}
// addItem();
