// index.js - Understand arrays and objects
// Author: Maggie Dougherty
// Date: oct 27 2023

// let's get this party started
//Defining variables 
myTransport = ["legs", "bus", "bike", "2008 honda element with broken passenger door", ];
// creating an object for my ride
myMainRide = {
  Make:"HONDA",
  Model:"ELEMENT",  
  Color: "GRAY",
  Year: 2008,
  //The method (carAge)
  age:function(){
  return 2023 - this.year;
}
};
//output
document.writeln ("My Types of Transportation:", myTransport,"</br>");
//how to write an object to the document
document.writeln ("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");