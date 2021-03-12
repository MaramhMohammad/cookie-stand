'use strict';
// This is Pat's business idea!!
// powerd by maramhmohammad
// console.log('test');
//lap instructions
//Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

//Replace the lists of your data for each store and build a single table of data instead
//Display each stores data in a table format. Break each column by the hour and complete each row with a “Daily Location Total”.

//Each cookie stand location should have a separate render() method that creates and appends its row to the table.

//The header row and footer row are each created in their own stand-alone function
//NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Salmon (site,minCust,maxCust,avgCokies){
  this.site=site;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCokies=avgCokies;
  this.dailySaleTotal = 0;
  this.salesPerHourArray = [],
  this.getAvgCookiesHour();

}

Salmon.prototype.randomNumCustPerHour = function () {
  for (let i = 0; i < hours.length; i++){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};

Salmon.prototype.getAvgCookiesHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlyCookies = Math.floor(this.randomNumCustPerHour() * this.avgCokies);
    this.salesPerHourArray.push(hourlyCookies);
    this.dailySaleTotal += hourlyCookies;
  }
};

// Salmon.prototype.

let seattle= new Salmon('Seattle', 23, 65, 6.3);
let tokyo = new Salmon ('Tokyo', 3, 24, 1.2);
let dubai = new Salmon('Dubai', 11, 38, 3.7);
let paris = new Salmon ('Paris', 20, 38, 2.3);
let lima = new Salmon ('Lima', 2, 16, 4.6);



// // object1

// let seattle={
//   site: 'seattle',
//   minCust: 20,//The minimum number of customers per hour.
//   maxCust: 65,//The maximum number of customers per hour.
//   avgCokies: 6.3,//The average number of cookies purchased per customer.
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   salesPerHourArray: [],//calculated cookies each hour
//   dailySaleTotal: 0,//total cookies all day

//   randomNumCustPerHour: function() { // generate a randome number of customers per hour
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generate
//   getAvgCookiesHour: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookies = Math.floor(this.randomNumCustPerHour() * this.avgCokies);
//       this.salesPerHourArray.push(hourlyCookies);
//       this.dailySaleTotal += hourlyCookies;
//     }
//   },
//   render: function () {
//     this.getAvgCookiesHour();
//     let seattleList = document.getElementById('seattle');
//     for (let i = 0; i < this.hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hours[i]} : ${this.salesPerHourArray[i]}`;
//       seattleList.appendChild(listItem);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySaleTotal}`;
//     seattleList.appendChild(li);
//   },
// };
// seattle.render();
// // // //object 2
// let tokyo={
//   site: 'Tokyo',
//   minCust:  3,//The minimum number of customers per hour.
//   maxCust:  24,//The maximum number of customers per hour.
//   avgCokies:  1.2,//The average number of cookies purchased per customer.
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   salesPerHourArray: [],//calculated cookies each hour
//   dailySaleTotal: 0,//total cookies all day
//   randomNumCustPerHour: function() { // generate a randome number of customers per hour
//     // console.log('Random number of customers');
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }, // source used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generate
//   getAvgCookiesHour: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookies = Math.floor(this.randomNumCustPerHour() * this.avgCokies);
//       this.salesPerHourArray.push(hourlyCookies);
//       this.dailySaleTotal += hourlyCookies;
//     }
//   }, //render method
//   render: function () {
//     this.getAvgCookiesHour();
//     let tokyoList = document.getElementById('tokyo');
//     for (let i = 0; i < this.hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hours[i]} : ${this.salesPerHourArray[i]}`;
//       tokyoList.appendChild(listItem);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySaleTotal}`;
//     tokyoList.appendChild(li);
//   },
// };
// tokyo.render();

// //object 3

// let dubai={
//   site: 'Dubai',
//   minCust:  11,//The minimum number of customers per hour.
//   maxCust: 38, //The maximum number of customers per hour.
//   avgCokies: 3.7,//The average number of cookies purchased per customer.
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   salesPerHourArray: [],//calculated cookies each hour
//   dailySaleTotal: 0,//total cookies all day
//   randomNumCustPerHour: function() { // generate a randome number of customers per hour
//     // console.log('Random number of customers');
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }, // source used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generate
//   getAvgCookiesHour: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookies = Math.floor(this.randomNumCustPerHour() * this.avgCokies);
//       this.salesPerHourArray.push(hourlyCookies);
//       this.dailySaleTotal += hourlyCookies;
//     }
//   }, //render method
//   render: function () {
//     this.getAvgCookiesHour();
//     let dubaiList = document.getElementById('dubai');
//     for (let i = 0; i < this.hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hours[i]} : ${this.salesPerHourArray[i]}`;
//       dubaiList.appendChild(listItem);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySaleTotal}`;
//     dubaiList.appendChild(li);
//   },
// };

// dubai.render();

// //object 4

// let paris={
//   site: 'Paris',
//   minCust:  20,//The minimum number of customers per hour.
//   maxCust:  38, //The maximum number of customers per hour.
//   avgCokies:  2.3,//The average number of cookies purchased per customer.
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   salesPerHourArray: [],//calculated cookies each hour
//   dailySaleTotal: 0,//total cookies all day
//   randomNumCustPerHour: function() { // generate a randome number of customers per hour
//     // console.log('Random number of customers');
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }, // source used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generate
//   getAvgCookiesHour: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookies = Math.floor(this.randomNumCustPerHour() * this.avgCokies);
//       this.salesPerHourArray.push(hourlyCookies);
//       this.dailySaleTotal += hourlyCookies;
//     }
//   }, //render method
//   render: function () {
//     this.getAvgCookiesHour();
//     let parisList = document.getElementById('paris');
//     for (let i = 0; i < this.hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hours[i]} : ${this.salesPerHourArray[i]}`;
//       parisList.appendChild(listItem);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySaleTotal}`;
//     parisList.appendChild(li);
//   },
// };
// paris.render();

// // // // //object 5

// let lima={
//   site: 'Lima',
//   minCust:  2,//The minimum number of customers per hour.
//   maxCust:  16,//The maximum number of customers per hour.
//   avgCokies:  4.6,//The average number of cookies purchased per customer.
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   salesPerHourArray: [],//calculated cookies each hour
//   dailySaleTotal: 0,//total cookies all day
//   randomNumCustPerHour: function() { // generate a randome number of customers per hour
//     // console.log('Random number of customers');
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }, // source used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generate
//   getAvgCookiesHour: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookies = Math.floor(this.randomNumCustPerHour() * this.avgCokies);
//       this.salesPerHourArray.push(hourlyCookies);
//       this.dailySaleTotal += hourlyCookies;
//     }
//   }, //render method
//   render: function () {
//     this.getAvgCookiesHour();
//     let limaList = document.getElementById('lima');
//     for (let i = 0; i < this.hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hours[i]} : ${this.salesPerHourArray[i]}`;
//       limaList.appendChild(listItem);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailySaleTotal}`;
//     limaList.appendChild(li);
//   },
// };
// lima.render();
