'use strict';

// This is Pat's business idea!!
// powerd by maramhmohammad

// console.log('test');
//object1


// let main=document.getElementById('demo');
let Seattle={
  site: 'seattle',
  minCust: 20,
  maxCust: 65,
  avgCokie: 6.3,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  CustPerHour:[],
  Sal:0,

  gitRandom: function(min,max) { // Random function gives us random number
    return Math.floor(Math.random() * (max - min + 1) + min);

  },

};

console.log(Seattle);


//   render: function () { //render function

//     let unorderdList=document.createElement('ul');
//     let site=document.createElement('li');
//     site.innerText=this.getSite();
//     unorderdList.appendChild(site);
//     main.appendChild(unorderdList);

//   // // console.log(unorderdList);
//   }

// Seattle.render();





// // //object 2
let Tokyo={
  site: 'Tokyo',
  minCust:  3,
  maxCust:  24,
  avgCokie:  1.2,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  CustPerHour:[],
  Sal:0,

  gitRandom: function(min,max) { // Random function gives us random number
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  render: function () {

  },

};

console.log(Tokyo);







// // // //object 3
let Dubai={
  site: 'Dubai',
  minCust:  11,
  maxCust: 38,
  avgCokie: 3.7,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  CustPerHour:[],
  Sal:0,

  gitRandom: function(min,max) { // Random function gives us random number
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  render: function () {

  },
};

Dubai.render();
console.log(Dubai);





// // //object 4

let Paris={
  site: 'Paris',
  minCust:  20,
  maxCust:  38,
  avgCokie:  2.3,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  CustPerHour:[],
  Sal:0,

  gitRandom: function(min,max) {  // Random function gives us random number
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  render: function () {

  },
};
console.log(Paris);






// // //object 5
let Lima={
  site: 'Lima',
  minCust:  2,
  maxCust:  16,
  avgCokie:  4.6,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  CustPerHour:[],
  Sal:0,

  gitRandom: function(min,max) {  // Random function gives us random number
    return Math.floor(Math.random() * (max - min + 1) + min);
  },


  render: function () {

  },
};

Lima.render();
console.log(Lima);
